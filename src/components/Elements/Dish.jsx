const Dish = ({ imageUrl, name, description, price }) => {
  return (
    <div className="text-center flex flex-col gap-4 items-center">
      <img
        className="max-w-[250px] border-8 border-neutral-300"
        src={imageUrl}
        alt={name}
      />
      <h3 className="text-xl">{name}</h3>
      <p>{description}</p>
      <span className="mystic-title text-[#e59205] text-2xl">${price}</span>
    </div>
  );
};

export default Dish;
