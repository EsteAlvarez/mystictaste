import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Rating from "../Elements/Rating";
import { useFetch } from "../../hooks/appFetch";

const url = "https://evban.cl/mystictaste/wp-json/wp/v2/valoraciones";

export const Ratings = () => {
  const { data, loading, error } = useFetch(url);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1 },
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
      className="flex flex-col items-center justify-center min-h-[40vh] text-center my-15 py-6 bg-[#111] text-white"
      aria-label="Carrusel de valoraciones de clientes"
    >
      <h2 className="relative text-2xl before:content-[''] before:block before:w-5 before:md:w-16 before:h-[2px] before:bg-white before:absolute before:left-[-30px] before:md:left-[-70px] before:top-1/2 after:content-[''] after:block after:w-5 after:md:w-16 after:h-[2px] after:bg-white after:absolute after:right-[-30px] after:md:right-[-70px] after:top-1/2">
        Valoraciones
      </h2>

      {loading && (
        <div className="flex justify-center items-center text-white">
          <p>Cargando datos de valoraciones...</p>
        </div>
      )}

      {error && (
        <p className="text-red-500">
          Error al cargar valoraciones: {error.message}
        </p>
      )}

      {!loading && Array.isArray(data) && data.length === 0 && (
        <p className="text-gray-400">No hay valoraciones disponibles.</p>
      )}

      {Array.isArray(data) && data.length > 0 && (
        <div className="w-[90%] sm:w-[85%] md:w-[70%] my-15">
          <div ref={sliderRef} className="keen-slider" role="region">
            {data.map((item) => (
              <div key={item.id} className="keen-slider__slide">
                <Rating name={item.title.rendered}>
                  {item.content.rendered
                    .replace(/<\/?p>/g, "")
                    .replace(/<\/?[^>]+(>|$)/g, "")}
                </Rating>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
