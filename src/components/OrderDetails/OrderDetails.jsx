import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import s from '../modal.css/modal.module.css'
import done from '../../images/graphics.svg'
import PropTypes from "prop-types";

const OrderDetails = ({ setShowModal }) => {

    return (
        <div className={s.modal} onMouseDown={(e) => e.stopPropagation()}>
            <article className={s.modal__article} style={{paddingTop: "60px", paddingBottom: "120px"}} >
                <div className={s.modal__headerContainer}>
                    <h2 className={`${s.modal__title} text text_type_main-large`}></h2>
                    <span onClickCapture={() => setShowModal(false)}><CloseIcon type="primary" /></span>                    
                </div>
                <p className={`${s.modal__subtitle} text text_type_digits-large`}>123456</p>
                <p className={`${s.modal__subtitle} text text_type_main-medium pt-8`}>идентификатор заказа</p>
                <img src={done} alt={done} className={s.modal__image} style={{ width: "120px", height: "120px", paddingTop: "60px"}} />
                <p className={`${s.modal__subtitle} text text_type_main-small pt-15`}>Ваш заказ начали готовить</p>
                <p className={`${s.modal__subtitle} text text_type_main-small pt-2 text_color_inactive`} >Дождитесь готовности на орбитальной станции</p>
            </article>
        </div>
    )
}

OrderDetails.propTypes = {
    setShowModal: PropTypes.func.isRequired
}


export default OrderDetails