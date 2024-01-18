import React from 'react';
import css from './Modal.module.css';

const Modal = ({ isOpen, onClose, imageUrl }) => {
  return (
    isOpen && (
      <div className={css.overlay} onClick={onClose}>
        <div className={css.modal} onClick={e => e.isOpen()}>
          <img src={imageUrl} alt="" />
        </div>
      </div>
    )
  );
};

export default Modal;
