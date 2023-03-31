import { createPortal } from 'react-dom';
import  { useEffect } from "react";
import s from './ModalOverlay.module.css';
import PropTypes from "prop-types";


const modalRoot = document.getElementById("react-modals");

const ModalOverlay = ({ onClose, onClosEsc, children }) => {

    function keydownHandler(evt) {
        if (evt.key === 'Escape') {
            onClosEsc();
        }
    }

    /*  const keydownHandler = ({ key }) => {
         switch (key) {
             case 'Escape':
                 onClose();
                 break;
             default:
         }
     } */

    useEffect(() => {
        // document.querySelector(`.${s.modalOverlay}`).addEventListener('click', onClose);
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);

    })

    return createPortal(
        <>
            <div className={s.modalOverlay} onMouseDown={(e) => {
                if ((e.target === e.currentTarget)) { onClose() }
            }}>
                {children}
            </div>
        </>
        , modalRoot
    );
}

ModalOverlay.propTypes = {
        onClose: PropTypes.func.isRequired,
        onClosEsc: PropTypes.func.isRequired,
        children: PropTypes.object
}

export default ModalOverlay