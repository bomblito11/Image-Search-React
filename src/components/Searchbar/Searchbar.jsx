import css from './Searchbar.module.css';

export const Searchbar = ({ handleSubmit, handleChange }) => {
  const search = e => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <header className={css.searchBar}>
        <form className={css.searchForm} onSubmit={search}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    </>
  );
};
