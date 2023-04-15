import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from '../modalOverlay/ModalOverlay';
import PropTypes from "prop-types";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import s from './modal.module.css'


const modalRoot = document.getElementById("react-modals");

const Modal = ({ children, closeModal, title }) => {

    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                closeModal();
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
            <ModalOverlay closeModal={closeModal}>
                <div className={s.modal} onMouseDown={(e) => e.stopPropagation()}>

                    <article className={title ? s.modal__articleTop40 : s.modal__articleTop60} >
                        <div className={s.modal__headerContainer}>
                            <h2 className={`${s.modal__title} text text_type_main-large`}>{title}</h2>
                            <span onClickCapture={closeModal}><CloseIcon type="primary" /></span>
                        </div>
                        {children}
                    </article>
                </div>
            </ModalOverlay>
        </>
        , modalRoot
    );
}

Modal.propTypes = {
    closeModal: PropTypes.func,
    onClosEsc: PropTypes.func,
    children: PropTypes.element,
    title: PropTypes.string
}

export default Modal