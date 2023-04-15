import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import React, { Component } from 'react';
import { getImages } from '../utils/api';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    query: '',
    isLoading: false,
    error: '',
    page: 1,
    show: false,
    modal: '',
  };

  showModal = url => {
    this.setState({
      show: true,
      modal: url,
    });
  };

  closeModal = () => {
    this.setState({
      show: false,
      modal: '',
    });
  };

  handleChange = query => {
    this.setState({
      query: query.target.value,
    });
  };

  handleSubmit = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      const response = await getImages(this.state.query, 1);
      this.setState(() => {
        return {
          images: [...response],
          page: this.state.page + 1,
          isLoading: false,
        };
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  handleMoreImage = async () => {
    this.setState({
      isLoading: true,
    });
    const response = await getImages(this.state.query, this.state.page);
    this.setState(() => {
      return {
        images: [...this.state.images, ...response],
        page: this.state.page + 1,
        isLoading: false,
      };
    });
  };

  render() {
    const { images, isLoading, modal, show } = this.state;

    return (
      <>
        <Searchbar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {isLoading && <Loader />}
        <ImageGallery images={images} openModal={this.showModal} />

        {show && (
          <Modal show={show} largeImgSrc={modal} closeModal={this.closeModal} />
        )}

        {images.length > 0 && (
          <LoadMoreButton handleMoreImage={this.handleMoreImage} />
        )}
      </>
    );
  }
}

export default App;
