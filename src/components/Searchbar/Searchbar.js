import { Component } from 'react';
import s from './Searchbar.module.css';
import { ReactComponent as Search } from './search.svg';

class Searchbar extends Component {
  state = {};

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form}>
          <button type="submit" className={s.button}>
            <span className={s.button_label}>
              {<Search style={{ width: '25px', height: '25px', }} />}
            </span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
