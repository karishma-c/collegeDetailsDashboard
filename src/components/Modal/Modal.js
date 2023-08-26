import React from 'react';
import './Modal.css'

const Modal = ({ children, closeModal, right }) => {

    return (
        <div className="modal">
            <div className={`modal-content ${ right ? 'appear-right' :''} `} onClick={(e)=>e.stopPropagation()} >
              {children}
            </div>
        </div>
    );

};

export default Modal;