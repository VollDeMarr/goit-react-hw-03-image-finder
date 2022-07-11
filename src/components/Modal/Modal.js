import s from './Modal.module.css';

import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()
export default function Modal() {

    const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()
  return (
    <div className={s.Overlay}>
      <div className={s.Modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
}
