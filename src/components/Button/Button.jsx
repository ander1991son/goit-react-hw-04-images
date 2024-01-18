import React from 'react';
import css from './Button.module.css';

const Button = ({ images, LoadMore }) => {
  const renderButton = () => {
    if (images.length > 0) {
      return (
        <button className={css.button} onClick={LoadMore}>
          Load more
        </button>
      );
    }
    return null; // No renderizar el botón si no hay imágenes cargadas
  };

  return <div className={css.divButton}>{renderButton()}</div>;
};

export default Button;
