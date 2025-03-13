import { appFetch } from "../../hooks/";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Dish from "../Elements/Dish";

const dbMystic = import.meta.env.VITE_DB_MYSTIC;
const collectionDishes = import.meta.env.VITE_COLLECTION_DISHES;

export const Dishes = () => {
  const { data, error, loading } = appFetch(dbMystic, collectionDishes);

  return (
    <section className="min-h-[40vh] text-center flex flex-col items-center justify-center gap-4 my-15">
      <h2 className="relative text-[#111] text-2xl before:content-[''] before:block before:w-5 before:md:w-16 before:h-[2px] before:bg-[#111] before:absolute before:left-[-30px] before:md:left-[-70px] before:top-1/2 after:content-[''] after:block after:w-5 after:md:w-16 after:h-[2px] after:bg-[#111] after:absolute after:right-[-30px] after:md:right-[-70px] after:top-1/2">
        Preparaciones Destacadas
      </h2>
      <p className="w-[95%] sm:w-[70%] md:w-[60%] text-[#444]">
        Te ofrecemos una experiencia culinaria única. Comienza con nuestras
        exquisitas entradas, sigue con los platos de fondo que fusionan
        tradición e innovación, y culmina con nuestros irresistibles postres, el
        broche de oro para una comida inolvidable. Cada bocado está diseñado
        para deleitar tu paladar y crear recuerdos memorables.
      </p>

      {loading && (
        <p className="text-[#111]">Cargando preparaciones destacadas...</p>
      )}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="w-[90vw] mt-15">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: true }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.$id}>
                <Dish
                  imageUrl={item.imageurl}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};
