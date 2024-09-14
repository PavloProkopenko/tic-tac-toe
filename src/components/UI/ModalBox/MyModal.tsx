import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button/MyButton';

type ModalProps = {
  show: boolean;
  message: string;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className="modal-backdrop"
      onClick={onClose}
    >
      <motion.div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Чтобы не закрывать модалку при клике внутри
      >
        <h2>{message}</h2>
        <Button value="Close" onClick={onClose}/>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
