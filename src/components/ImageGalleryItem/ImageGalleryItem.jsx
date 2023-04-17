import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, imgSrc, openModal, largeImgSrc }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={imgSrc}
        alt={id}
        className={css.imageGalleryItemImage}
        onClick={() => openModal(largeImgSrc)}
      />
    </li>
  );
};
