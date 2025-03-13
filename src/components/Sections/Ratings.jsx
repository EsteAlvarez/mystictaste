import { appFetch } from "../../hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Rating from "../Elements/Rating";

const dbMystic = import.meta.env.VITE_DB_MYSTIC;
const collectionRatings = import.meta.env.VITE_COLLECTION_RATINGS;

export const Ratings = () => {
  const { data, error, loading } = appFetch(dbMystic, collectionRatings);

  return (
    <section className="bg-[#111] text-white min-h-[40vh] text-center flex flex-col items-center justify-center my-15 py-6">
      <h2 className="relative text-2xl before:content-[''] before:block before:w-5 before:md:w-16 before:h-[2px] before:bg-white before:absolute before:left-[-30px] before:md:left-[-70px] before:top-1/2 after:content-[''] after:block after:w-5 after:md:w-16 after:h-[2px] after:bg-white after:absolute after:right-[-30px] after:md:right-[-70px] after:top-1/2">
        Valoraciones
      </h2>

      {loading && <p className="text-white">Cargando valoraciones...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="w-[90%] sm:w-[85%] md:w-[70%] my-15">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            slidesPerView={1}
            loop={true}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.$id}>
                <Rating name={item.name}>{item.rating}</Rating>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};
