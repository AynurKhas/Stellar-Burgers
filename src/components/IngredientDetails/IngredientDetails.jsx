import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import s from '../modal.css/modal.module.css'
import PropTypes from "prop-types";

const IngredientDetails = ({ product, setShowModal }) => {

    return (
        <div className={s.modal} onMouseDown={(e) => e.stopPropagation()} >
            <article className={s.modal__article} >
                <div className={s.modal__headerContainer}>
                    <h2 className={`${s.modal__title} text text_type_main-large`}>Детали ингредиента</h2>
                    <span onClickCapture={() => setShowModal(false)}><CloseIcon type="primary" /></span>                    
                </div>
                <img src={product.image_large} alt={product.name} className={s.modal__image} style={{ maxWidth: "520px", width: "100%" }} />
                <p className={`${s.modal__subtitle} text text_type_main-medium pt-4`}>{product.name}</p>
                <ul className={s.modal__productComposition}>
                    <li className={s.modal__productCompositionItems}>
                        <span className={`${s.modal__span} text text_type_main-default text_color_inactive`}>Калории,ккал</span>
                        <span className={`${s.modal__spanData} text text_type_digits-default text_color_inactive`}>{product.calories}</span>
                    </li>
                    <li className={s.modal__productCompositionItems}>
                        <span className={`${s.modal__span} text text_type_main-default text_color_inactive`}>Белки, г</span>
                        <span className={`${s.modal__spanData} text text_type_digits-default text_color_inactive`}>{product.proteins
                        }</span>
                    </li>
                    <li className={s.modal__productCompositionItems}>
                        <span className={`${s.modal__span} text text_type_main-default text_color_inactive`}>Жиры, г</span>
                        <span className={`${s.modal__spanData} text text_type_digits-default text_color_inactive`}>{product.fat}</span>
                    </li>
                    <li className={s.modal__productCompositionItems}>
                        <span className={`${s.modal__span} text text_type_main-default text_color_inactive`}>Углеводы, г</span>
                        <span className={`${s.modal__spanData} text text_type_digits-default text_color_inactive`}>{product.carbohydrates}</span>
                    </li>
                </ul>
            </article>
        </div>
    )
}

IngredientDetails.propTypes = {
    setShowModal: PropTypes.func.isRequired,
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}


export default IngredientDetails