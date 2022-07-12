import { Component } from 'react';
import Loader from '../Loader/Loader';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    request: '',
    loading: false,
    page: 1,
    KEY: '28064028-9753e04b4800a7fc07442f07d',
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.requestName !== this.props.requestName) {
      const { page, KEY } = this.state;
      const { requestName } = this.props;
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${requestName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error('По даному запиту нічого не знайдено')
          );
        })
        .then(request => this.setState({ request }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const { request, loading, error } = this.state;
    return (
      <div>
        {error && <h1>{error.message}</h1>}
        <ul className={s.ImageGallery}>
          <ImageGalleryItem prop={request} />
        </ul>
        {loading && <Loader />}
        {/* <Loader/> */}
      </div>
    );
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
