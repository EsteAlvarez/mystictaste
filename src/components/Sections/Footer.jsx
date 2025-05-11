import FooterItem from "../Elements/FooterItem";

export const Footer = () => {
  return (
    <footer className=" flex flex-col gap-5 justify-center items-center min-h-[40vh] bg-[#111] text-white text-center">
      <h2 className="mystic-title text-[#e59205] text-4xl">
        <a href="index.html">Mystic Taste.</a>
      </h2>
      <p className="w-[95%] sm:w-[70%] md:w-[60%] mx-auto">
        Mystic Taste es un proyecto ficticio creado con fines demostrativos.
        Todos los contenidos, imágenes y descripciones son parte de una
        propuesta creativa sin fines comerciales.
      </p>
    </footer>
  );
};
