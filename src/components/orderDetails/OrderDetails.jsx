import s from '../modal/modal.module.css'
import done from '../../images/graphics.svg'
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getOrderNumber } from '../../services/actions/burgerConstructor';

const OrderDetails = () => {
    const { burger, isLoading, hasError, order } = useSelector(store => store.burgerConstructor);
    const ingredientsIdArray = burger.ingredients.map(item => item._id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderNumber(ingredientsIdArray));
    }, []);

    return (
        <>
            {isLoading && 'Загрузка...'}
            {hasError && 'Произошла ошибка'}
            {!isLoading &&
                !hasError &&
                order.orderNumber &&
                <>
                    <p className={`${s.modal__subtitle} text text_type_digits-large`}>{order.orderNumber}</p>
                    <p className={`${s.modal__subtitle} text text_type_main-medium pt-8`}>идентификатор заказа</p>
                    <img src={done} alt={done} className={s.modal__image} />
                    <p className={`${s.modal__subtitle} text text_type_main-small pt-15`}>Ваш заказ начали готовить</p>
                    <p className={`${s.modal__subtitle} text text_type_main-small pt-2 text_color_inactive`} >Дождитесь готовности на орбитальной станции</p>
                </>
            }
        </>
    )
}

export default OrderDetails