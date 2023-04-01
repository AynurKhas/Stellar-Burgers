import s from './ModalOverlay.module.css';
import PropTypes from "prop-types";

const ModalOverlay = ({ children, setShowModal }) => {
       
    return(
            <div className={s.modalOverlay} onMouseDown={() => setShowModal(false)}>
                {children}
            </div>
    );
}

ModalOverlay.propTypes = {
    setShowModal: PropTypes.func,
    children: PropTypes.element
}

export default ModalOverlay