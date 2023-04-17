import css from './LoadMoreButton.module.css';

export const LoadMoreButton = ({ handleMoreImage }) => {
  return (
    <>
      <button className={css.loadMoreButton} onClick={handleMoreImage}>
        Load More
      </button>
    </>
  );
};
