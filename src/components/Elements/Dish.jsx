const Dish = ({ imageUrl, name, description, price }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <img className="max-w-[300px]" src={imageUrl} alt={name} loading="lazy" />
      <h3 className="text-xl">{name}</h3>
      <p>{description}</p>
      <span className="mystic-title text-[#e59205] text-2xl">${price}</span>
    </div>
  );
};

export default Dish;
