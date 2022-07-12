import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
class ImageGalleryItem extends Component {
  // console.log(this.prop)
  render() {
    let elements = []
    if (this.props.prop.hits) {
      
       elements = this.props.prop.hits;
    } 

    // console.log(elements);
    return elements.map(element => (
      <li key={element.id} className={s.ImageGalleryItem}>
        <img className={s.ImageGalleryItemImage} src={element.webformatURL} alt={element.user} />
      </li>
    ));
  }
}
export default ImageGalleryItem;
