import React, { useState, useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ isOpen, onClose, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    isModalOpen && (
      <div className={css.overlay} onClick={closeModal}>
        <div className={css.modal} onClick={e => e.stopPropagation()}>
          <img src={imageUrl} alt="" />
        </div>
      </div>
    )
  );
};

export default Modal;

////////////////////////////////////////7 codigo de abajo oirginal
// import React from 'react';
// import css from './Modal.module.css';

// const Modal = ({ isOpen, onClose, imageUrl }) => {
//   return (
//     isOpen && (
//       <div className={css.overlay} onClick={onClose}>
//         <div className={css.modal} onClick={e => e.isOpen()}>
//           <img src={imageUrl} alt="" />
//         </div>
//       </div>
//     )
//   );
// };

// export default Modal;
