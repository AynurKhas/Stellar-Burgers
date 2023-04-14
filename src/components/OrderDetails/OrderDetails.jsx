import s from '../modal/modal.module.css'
import done from '../../images/graphics.svg'
import { api } from "../../utils/Api";
import { useContext, useEffect, useState } from "react";
import { DataBurger } from "../../services/productsContext";

const OrderDetails = () => {
    const [burger, setBurger] = useContext(DataBurger);

    const [state, setState] = useState({
        isLoading: false,
        hasError: false
    });

    const ingredientsIdArray = burger.ingredients.map(item => item._id);

    useEffect(() => {
        setState({ ...state, hasError: false, isLoading: true });
        api.sendPostOrderToServer(ingredientsIdArray)
            .then((res) => setState({ ...state, isLoading: false }, setBurger({ ...burger, orderNumber: res.order.number })))
            .catch(() => {
                setState({ ...state, hasError: true, isLoading: false })
            })
    }, []);

    const { isLoading, hasError } = state;
    return (
        <>
            {isLoading && 'Загрузка...'}
            {hasError && 'Произошла ошибка'}
            {!isLoading &&
                !hasError &&
                burger.orderNumber &&
                <>
                    <p className={`${s.modal__subtitle} text text_type_digits-large`}>{burger.orderNumber}</p>
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