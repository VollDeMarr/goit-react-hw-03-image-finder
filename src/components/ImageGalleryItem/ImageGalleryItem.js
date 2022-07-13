import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
class ImageGalleryItem extends Component {
  render() {
    let elements = [];
    if (this.props.prop) {
      elements = this.props.prop;
    }
    return elements.map(element => (
      <li key={element.id} className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItemImage}
          src={element.webformatURL}
          alt={element.user}
        />
      </li>
    ));
  }
}
export default ImageGalleryItem;
