import s from './ModalOverlay.module.css';
import PropTypes from "prop-types";

const ModalOverlay = ({ children, closeModal }) => {
       
    return(
            <div className={s.modalOverlay} onMouseDown={closeModal}>
                {children}
            </div>
    );
}

ModalOverlay.propTypes = {
    closeModal: PropTypes.func,
    children: PropTypes.element
}

export default ModalOverlay