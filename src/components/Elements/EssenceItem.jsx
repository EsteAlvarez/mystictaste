const EssenceItem = ({ icon, title, description }) => {
  return (
    <div className="text-center flex flex-col gap-3 justify-center items-center">
      <span className="text-[#e59205] text-3xl">{icon}</span>
      <h3 className="text-[#e59205] text-xl">{title}</h3>
      <p className="w-[95%] sm:w-[85%] md:w-[80%] text-[#444]">{description}</p>
    </div>
  );
};

export default EssenceItem;
