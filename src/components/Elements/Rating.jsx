import { RiDoubleQuotesL } from "react-icons/ri";

const Rating = ({ name, children }) => {
  return (
    <div className="text-center flex flex-col items-center gap-3">
      <span className="text-2xl text-[#e59205]">
        <RiDoubleQuotesL />
      </span>
      <h3 className="text-xl">{name}</h3>
      <p className="w-[90%] sm:w-[80%] md:w-[70%]">{children}</p>
    </div>
  );
};

export default Rating;
