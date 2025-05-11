import "animate.css";
import Nav from "../Elements/Nav";
import heroImage from "../../assets/hero-image-mystic-taste.webp";

const backgroundStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "multiply",
  backgroundImage: `url(${heroImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const Header = () => {
  return (
    <header
      style={backgroundStyle}
      className="min-h-[100dvh] w-full relative overflow-hidden"
    >
      <div className="hero-fade-overlay"></div>

      <div className="relative z-10">
        <Nav title={"Mystic Taste."} />
        <div className="min-h-[90vh] flex flex-col gap-5 items-center justify-center text-center">
          <span className="animate__animated animate__fadeInUp relative text-2xl text-white before:content-[''] before:block before:w-5 before:md:w-16 before:h-[1px] before:bg-white before:absolute before:left-[-30px] before:md:left-[-70px] before:top-1/2 after:content-[''] after:block after:w-5 after:md:w-16 after:h-[1px] after:bg-white after:absolute after:right-[-30px] after:md:right-[-70px] after:top-1/2">
            Bienvenidos a
          </span>
          <h1 className="animate__animated animate__fadeInUp mystic-title text-[#e59205] text-5xl md:text-7xl">
            Mystic Taste.
          </h1>
          <p className="animate__animated animate__fadeInUp w-[95%] sm:w-[70%] md:w-[60%] text-white">
            Disfruta la experiencia culinaria única en Mystic Taste, donde cada
            plato es una obra maestra de sabores frescos y técnicas artesanales.
            Tentadores aromas y presentación impecable, cada detalle está
            cuidadosamente diseñado para ofrecer momentos inolvidables en la
            mesa.
          </p>
        </div>
      </div>
    </header>
  );
};
