const GalleryItem = ({ imageSrc, altText }) => {
  return <img className="w-1/5 h-auto" src={imageSrc} alt={altText} />;
};

export default GalleryItem;
