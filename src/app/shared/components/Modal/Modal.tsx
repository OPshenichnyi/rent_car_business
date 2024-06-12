'use client';
import React, { ReactNode, useEffect } from 'react';
import styles from './modal.module.css';
import ReactDOM from 'react-dom';
import Close from '../icons/Close';

interface ModalContextType {
  onClose: () => void;
  children: ReactNode;
}
const Modal: React.FC<ModalContextType> = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const valueBtn = e.key.toLowerCase();
      if (valueBtn === 'escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    console.error(
      "The element with id 'modal-root' was not found in the document."
    );
    return null;
  }

  const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    const idElement = target.id.toLowerCase();
    if (idElement === 'overlay') {
      onClose();
    }
  };

  const modalContent = (
    <div
      className={styles.modal_overlay}
      onClick={handleOverlayClick}
      id="overlay"
    >
      <div className={styles.modal_content}>
        <div className={styles.close} onClick={onClose}>
          <Close />
        </div>
        {children}
      </div>
    </div>
  );
  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default Modal;
