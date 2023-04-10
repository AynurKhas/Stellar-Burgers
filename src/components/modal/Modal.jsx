import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import PropTypes from "prop-types";


const modalRoot = document.getElementById("react-modals");

const Modal = ({ onClosEsc, children, setShowModal }) => {

    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                onClosEsc();
                break;
            default:
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);

    }, [])

    return createPortal(
        <>
            <ModalOverlay setShowModal={setShowModal}>
                {children }
            </ModalOverlay>
        </>
        , modalRoot
    );
}

Modal.propTypes = {
    setShowModal: PropTypes.func,
    onClosEsc: PropTypes.func,
    children: PropTypes.element
}

export default Modal