import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import React, { useState } from 'react';
import { getImages } from '../utils/api';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import Loader from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState('');

  const showModal = url => {
    setShow(true);
    setModal(url);
  };

  const closeModal = () => {
    setShow(false);
    setModal('url');
  };

  const handleChange = query => {
    setQuery(query.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await getImages(query, 1);
      setImages([...response]);
      setPage(page + 1);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMoreImage = async () => {
    setIsLoading(true);
    const response = await getImages(query, page);
    setImages(prevImages => [...prevImages, ...response]);
    setPage(prevPage => prevPage + 1);
    setIsLoading(false);
  };

  return (
    <>
      <Searchbar handleSubmit={handleSubmit} handleChange={handleChange} />
      {isLoading && <Loader />}
      <ImageGallery images={images} openModal={showModal} />

      {show && (
        <Modal show={show} largeImgSrc={modal} closeModal={closeModal} />
      )}

      {images.length > 0 && (
        <LoadMoreButton handleMoreImage={handleMoreImage} />
      )}
    </>
  );
};

export default App;
