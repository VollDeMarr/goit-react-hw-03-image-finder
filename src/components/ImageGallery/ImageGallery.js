import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
function ImageGallery() {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem />
    </ul>
  );
}
export default ImageGallery;
