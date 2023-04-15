import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  search = e => {
    e.preventDefault();
    const { handleSubmit } = this.props;

    handleSubmit();
  };

  render() {
    const { handleChange } = this.props;

    return (
      <>
        <header className={css.searchBar}>
          <form className={css.searchForm} onSubmit={this.search}>
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
  }
}

export default Searchbar;
