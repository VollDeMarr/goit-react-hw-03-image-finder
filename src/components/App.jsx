import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import s from './App.module.css';

class App extends Component {
  state = {
    requestName: '',
    isOpenModal: false,
  };

  searchForm = name => {
    this.setState({ requestName: name });
  };

  render() {
    console.log(this.state.requestName)
    const {isOpenModal} = this.state
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.searchForm} />
        <ImageGallery requestName={this.state.requestName} />
        {isOpenModal && <Modal src='' alt="big brother is watching you"/>}
      </div>
    );
  }
}
export default App;
