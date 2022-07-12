import { Component } from 'react';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    request: '',
    // loading: false,
    page: 1,
    KEY: '28064028-9753e04b4800a7fc07442f07d',
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.requestName !== this.props.requestName) {
      const { page, KEY } = this.state;
      const { requestName } = this.props;
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${requestName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          this.setState({ error: true });
          return Promise.reject(
            new Error('По даному запиту нічого не знайдено')
          );
        })
        .then(request => this.setState({ request, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };
  
  render() {
    const { request, error, status } = this.state;
    if (status === 'idle') {
    }
    if (status === 'pending') {
      return (
        <>
          <Loader />{' '}
        </>
      );
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className={s.ImageGallery}>
            <ImageGalleryItem prop={request} />
          </ul>
          <Button onClick={this.loadMore} />
        </>
      );
    }
  }
}

export default ImageGallery;

// import Fetch from '../Fetch/Fetch'
// function ImageGallery() {
// return (
//   <ul className={s.ImageGallery}>
//     <ImageGalleryItem />
//   </ul>
// );
// }
// export default ImageGallery;
