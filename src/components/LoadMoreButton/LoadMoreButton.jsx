import { Component } from 'react';
import css from './LoadMoreButton.module.css';

class LoadMoreButton extends Component {
  render() {
    const { handleMoreImage } = this.props;
    return (
      <>
        <button className={css.loadMoreButton} onClick={handleMoreImage}>
          Load More
        </button>
      </>
    );
  }
}

export default LoadMoreButton;
