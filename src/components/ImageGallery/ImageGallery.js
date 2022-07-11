import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
function ImageGallery() {
  return (
    <ul className={s.gallery}>
      <ImageGalleryItem />
    </ul>
  );
}
export default ImageGallery;
