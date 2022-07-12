import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
// import Loader from './Loader/Loader';
// import Button from './Button/Button';
// import Fetch from './Fetch/Fetch'
import s from './App.module.css';

class App extends Component {
  state = {
    loading: false,
    requestName: '',
  };

  searchForm = name => {
    this.setState({ requestName: name });
    // console.log(name);
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.searchForm} />
        <ImageGallery requestName={this.state.requestName} />
        {/* {<ImageGallery requestName={this.state.requestName} /> && <Button />} */}
{/* <Fetch /> */}
        {/* <Loader /> */}
        {/* <Button /> */}
      </div>
    );
  }
}
export default App;
