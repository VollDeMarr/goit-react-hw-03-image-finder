// import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
// import Loader from './Loader/Loader';
// import Button from './Button/Button';
import { Component } from 'react';
import s from './App.module.css';

class App extends Component {

  render() {
    return (
      <div className={s.App}>
        <Searchbar />

        {/* {this.state.request && <ImageGallery />} */}
        {/* <Loader />
        <Button /> */}
      </div>
    );
  }
}
export default App;
