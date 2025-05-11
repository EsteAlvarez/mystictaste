import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Dish from "../Elements/Dish";
import { useFetch } from "../../hooks/appFetch";

const url = "https://evban.cl/mystictaste/wp-json/wp/v2/posts?_embed";

export const Dishes = () => {
  const { data, loading, error } = useFetch(url);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3,
            spacing: 15,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section
      className="min-h-[40vh] text-center flex flex-col items-center justify-center gap-4 my-15"
      aria-label="Carrusel de platos destacados"
    >
      <h2 className="relative text-[#111] text-2xl before:content-[''] before:block before:w-5 before:md:w-16 before:h-[2px] before:bg-[#111] before:absolute before:left-[-30px] before:md:left-[-70px] before:top-1/2 after:content-[''] after:block after:w-5 after:md:w-16 after:h-[2px] after:bg-[#111] after:absolute after:right-[-30px] after:md:right-[-70px] after:top-1/2">
        Preparaciones Destacadas
      </h2>
      <p className="w-[95%] sm:w-[70%] md:w-[60%] text-[#444]">
        Te ofrecemos una experiencia culinaria única. Comienza con nuestras
        exquisitas entradas, sigue con los platos de fondo que fusionan
        tradición e innovación, y culmina con nuestros irresistibles postres, el
        broche de oro para una comida inolvidable.
      </p>

      {loading && (
        <div className="flex justify-center items-center">
          <p>Cargando preparaciones destacadas...</p>
        </div>
      )}

      {error && (
        <p className="text-red-500">Error al cargar platos: {error.message}</p>
      )}

      {!loading && Array.isArray(data) && data.length === 0 && (
        <p className="text-gray-500">
          No hay preparaciones destacadas por ahora.
        </p>
      )}

      {Array.isArray(data) && data.length > 0 && (
        <div className="w-[90%] mt-15">
          <div
            ref={sliderRef}
            className="keen-slider"
            role="region"
          >
            {data.map((item) => {
              const imageUrl =
                item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
              const description = item.acf?.descripcion_del_plato ?? "";
              const price = item.acf?.precio ?? "";

              return (
                <div key={item.id} className="keen-slider__slide">
                  <Dish
                    imageUrl={imageUrl}
                    name={item.title.rendered}
                    description={description}
                    price={price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
