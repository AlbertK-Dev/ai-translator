import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // Pour le style de votre modal

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>X</button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement
    );
};

export default Modal;
