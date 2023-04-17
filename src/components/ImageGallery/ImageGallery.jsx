import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          id={image.id}
          imgSrc={image.webformatURL}
          largeImgSrc={image.largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};
