import { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images, openModal } = this.props;

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
  }
}

export default ImageGallery;
