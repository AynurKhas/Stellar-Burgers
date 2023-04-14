import s from '../modal/modal.module.css'
import PropTypes from "prop-types";

const IngredientDetails = ({ product }) => {

    return (
        <>
            <img src={product.image_large} alt={product.name} className={s.modal__imageIngridient} />
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
        </>
    )
}

IngredientDetails.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string
    })
}


export default IngredientDetails