import EssenceItem from "../Elements/EssenceItem";
import { GrRestaurant } from "react-icons/gr";
import { MdSoupKitchen } from "react-icons/md";
import { TbSalt } from "react-icons/tb";

export const OurEssence = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 min-h-[50vh] text-center">
      <h2 className="relative text-[#111] text-2xl before:content-[''] before:block before:w-5 before:md:w-16 before:h-[2px] before:bg-[#111] before:absolute before:left-[-30px] before:md:left-[-70px] before:top-1/2 after:content-[''] after:block after:w-5 after:md:w-16 after:h-[2px] after:bg-[#111] after:absolute after:right-[-30px] after:md:right-[-70px] after:top-1/2">
        Nuestra Esencia
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 max-w-[90%] md:max-w-[80%] mx-auto">
        <EssenceItem
          icon={<MdSoupKitchen />}
          title="Mar y tierra"
          description={
            "La mejor selección de pescados frescos y vegetales de temporada, garantizando sabor y calidad en cada plato."
          }
        />
        <EssenceItem
          icon={<GrRestaurant />}
          title="Tradición artesanal"
          description={
            "Vinos de alta gama, quesos curados y pastas elaboradas con técnicas tradicionales para una experiencia auténtica."
          }
        />
        <EssenceItem
          icon={<TbSalt />}
          title="Esencia y sabor"
          description={
            "Condimentos cuidadosamente elegidos para realzar cada ingrediente y crear combinaciones únicas e inolvidables."
          }
        />
      </div>
    </section>
  );
};
