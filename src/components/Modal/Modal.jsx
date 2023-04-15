import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ largeImgSrc, id, show, closeModal }) => {
  useEffect(() => {
    const handleCloseModal = e => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  if (!show) {
    return null;
  }
  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        <img src={largeImgSrc} alt={id} />
      </div>
    </div>
  );
};
