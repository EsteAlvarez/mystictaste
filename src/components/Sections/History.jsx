import mystic_historia_1 from "../../assets/mystic_historia_1.webp";
import mystic_historia_2 from "../../assets/mystic_historia_2.webp";

export const History = () => {
  return (
    <section className="min-h-[40vh] text-center flex flex-col items-center justify-center gap-4 my-15">
      <h2 className="relative text-[#111] text-2xl before:content-[''] before:block before:w-5 before:md:w-16 before:h-[2px] before:bg-[#111] before:absolute before:left-[-30px] before:md:left-[-70px] before:top-1/2 after:content-[''] after:block after:w-5 after:md:w-16 after:h-[2px] after:bg-[#111] after:absolute after:right-[-30px] after:md:right-[-70px] after:top-1/2">
        Nuestra Historia
      </h2>
      <p className="w-[95%] sm:w-[70%] md:w-[60%] text-[#444]">
        Mystic Taste fue fundado por la Chef Isabella, una apasionada de la
        cocina con raíces culinarias profundas. Inspirada por su amor por los
        sabores frescos y la creatividad en la cocina, Isabella abrió Mystic
        Taste con la visión de ofrecer una experiencia gastronómica que fusiona
        tradición y innovación. Desde entonces, Mystic Taste se ha convertido en
        un oasis culinario donde cada plato cuenta una historia de dedicación a
        ingredientes locales y técnicas artesanales, celebrando la buena comida
        y la comunidad en un ambiente acogedor y elegante.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-3 p-4">
        <img src={mystic_historia_1} alt="" />
        <img src={mystic_historia_2} alt="" />
      </div>
    </section>
  );
};
