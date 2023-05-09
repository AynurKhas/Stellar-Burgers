import s from '../modal/modal.module.css'
import { useSelector } from 'react-redux'

const IngredientDetails = () => {
    const { currentIngredient } = useSelector(store => store.burger);

    return (
        <>
            <img src={currentIngredient.image_large} alt={currentIngredient.name} className={s.modal__imageIngridient} />
            <p className={`${s.modal__subtitle} text text_type_main-medium pt-4`}>{currentIngredient.name}</p>
            <ul className={s.modal__productComposition}>
                <li className={s.modal__productCompositionItems}>
                    <span className={`${s.modal__span} text text_type_main-default text_color_inactive`}>Калории,ккал</span>
                    <span className={`${s.modal__spanData} text text_type_digits-default text_color_inactive`}>{currentIngredient.calories}</span>
                </li>
                <li className={s.modal__productCompositionItems}>
                    <span className={`${s.modal__span} text text_type_main-default text_color_inactive`}>Белки, г</span>
                    <span className={`${s.modal__spanData} text text_type_digits-default text_color_inactive`}>{currentIngredient.proteins
                    }</span>
                </li>
                <li className={s.modal__productCompositionItems}>
                    <span className={`${s.modal__span} text text_type_main-default text_color_inactive`}>Жиры, г</span>
                    <span className={`${s.modal__spanData} text text_type_digits-default text_color_inactive`}>{currentIngredient.fat}</span>
                </li>
                <li className={s.modal__productCompositionItems}>
                    <span className={`${s.modal__span} text text_type_main-default text_color_inactive`}>Углеводы, г</span>
                    <span className={`${s.modal__spanData} text text_type_digits-default text_color_inactive`}>{currentIngredient.carbohydrates}</span>
                </li>
            </ul>
        </>
    )
}


export default IngredientDetails