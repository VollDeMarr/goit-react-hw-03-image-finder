import { Component } from 'react';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    items: [],
    page: 1,
    KEY: '28064028-9753e04b4800a7fc07442f07d',
    error: null,
    status: 'idle',
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.requestName !== this.props.requestName ||
      prevState.page !== this.state.page
    ) {
      const { page, KEY } = this.state;
      const { requestName } = this.props;
      this.setState({ status: 'pending' });
      const response = await fetch(
        `https://pixabay.com/api/?q=${requestName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const parsed = await response.json();
      if (this.state.page === 1) {
        this.setState({ items: parsed.hits, status: 'resolved' });
      } else {
        this.setState(() => {
          return {
            items: [...prevState.items, ...parsed.hits],
            status: 'resolved',
          };
        });
      }
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
    const { items, error, status } = this.state;
    // if (status === 'idle') {
    // }
    // if (status === 'pending') {
    //   return (
    //     <>
    //       <Loader />
    //     </>
    //   );
    // }
    // if (status === 'rejected') {
    //   return <h1>{error.message}</h1>;
    // }
    // if (status === 'resolved') {
    // return (
    // <>
    //   <ul className={s.ImageGallery}>
    //     <ImageGalleryItem prop={items} />
    //   </ul>
    //   <Button onClick={this.loadMore} />
    // </>
    // );
    // }

    return (
      <>
        {status === 'idle' && <h2>Введіть ваш запит</h2>}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <h1>{error.message}</h1>}
        <>
          <ul className={s.ImageGallery}>
            <ImageGalleryItem prop={items} />
          </ul>
          {status !== 'idle' && <Button onClick={this.loadMore} />}
        </>
      </>
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
