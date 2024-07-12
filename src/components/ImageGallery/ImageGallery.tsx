import { ImageEntity } from "../../entities";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: ImageEntity[];
  setModalImgSrc: (imageSrc: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  setModalImgSrc,
}) => {
  return (
    <ul className={css.list}>
      {images.map((img) => {
        return (
          <li className={css.listItem} key={img.id}>
            <ImageCard data={img} setModalImgSrc={setModalImgSrc} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
