import React from 'react';
import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ image }) => {
  return (
    <li key={image.id} className={css.galleryItem}>
      <img src={image} alt="Descripción de la imagen" />
    </li>
  );
};

export default ImageGalleryItem;
