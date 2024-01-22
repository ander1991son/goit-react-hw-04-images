import React from 'react';
import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ image }) => {
  return (
    <li key={image.id} className={css.ImageGalleryItem}>
      <img src={image} alt="Descripción de la imagen" className={css.image} />
    </li>
  );
};

export default ImageGalleryItem;
