import { createPortal } from 'react-dom';
import { useEffect } from "react";
import s from './ModalOverlay.module.css';
import PropTypes from "prop-types";


const modalRoot = document.getElementById("react-modals");

const ModalOverlay = ({ onClosEsc, children, setShowModal }) => {

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
            <div className={s.modalOverlay} onMouseDown={() => setShowModal(false)}>
                {children}
            </div>
        </>
        , modalRoot
    );
}

ModalOverlay.propTypes = {
    setShowModal: PropTypes.func,
    onClosEsc: PropTypes.func.isRequired,
    children: PropTypes.object
}

export default ModalOverlay