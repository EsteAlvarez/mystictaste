import GalleryItem from "../Elements/GalleryItem"
import galley_item_1 from "../../assets/gallery_item_1.webp"
import galley_item_2 from "../../assets/gallery_item_2.webp"
import galley_item_3 from "../../assets/gallery_item_3.webp"
import galley_item_4 from "../../assets/gallery_item_4.webp"
import galley_item_5 from "../../assets/gallery_item_5.webp"

export const Gallery = () => {
  return (
    <div className="flex my-15">
      <GalleryItem imageSrc={galley_item_1} altText={"..."} />
      <GalleryItem imageSrc={galley_item_2} altText={"..."} />
      <GalleryItem imageSrc={galley_item_3} altText={"..."} />
      <GalleryItem imageSrc={galley_item_4} altText={"..."} />
      <GalleryItem imageSrc={galley_item_5} altText={"..."} />
    </div>
  );
};
