import { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    request: null,
    loading: false,
    page: 1,
    KEY: '28064028-9753e04b4800a7fc07442f07d',
  };

  componentDidMount() {
    const { page, KEY, request } = this.state;
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?q=${request}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(r => r.json())
      .then(request => {
        // console.log(request.hits);
        this.setState({ request });
      })
      .finally(() => this.setState({ loading: false }));
  }

  submitForm = e => {
    e.preventDefault();
    this.setState({ request: '' });
  };
  changeInput = e => {
    this.setState({ request: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.submitForm}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeInput}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
