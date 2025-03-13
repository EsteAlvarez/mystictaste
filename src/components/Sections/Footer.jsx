import FooterItem from "../Elements/FooterItem";

export const Footer = () => {
  return (
    <footer className="min-h-[40vh] bg-[#111] text-white flex flex-col sm:flex-row gap-5 px-6 py-15 justify-between">
      <div>
        <h2 className="mystic-title text-[#e59205] text-4xl">
          <a href="index.html">Mystic Taste.</a>
        </h2>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        <FooterItem title={"Contacto"}>
          <p className="text-[#ececec]">contacto@mystictaste.cl</p>
        </FooterItem>
        <FooterItem title={"Dirección"}>
          <p className="text-[#ececec]">Calle de ejemplo #1234</p>
        </FooterItem>
        <FooterItem title={"Horarios"}>
          <p className="text-[#ececec]">Lunes a viernes de 9:00am a 20:00pm</p>
          <p className="text-[#ececec]">Sabado y domingo de 9:00am a 21:00pm</p>
        </FooterItem>
      </div>
    </footer>
  );
};
