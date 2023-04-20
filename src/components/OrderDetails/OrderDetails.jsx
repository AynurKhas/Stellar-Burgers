import s from '../modal/modal.module.css'
import done from '../../images/graphics.svg'
import { api } from "../../utils/Api";
import { useContext, useEffect, useMemo, useState } from "react";
import { DataBurger } from "../../services/productsContext";
import { useSelector, useDispatch } from 'react-redux'
import { getOrderNumber } from '../../services/actions/burger';

const OrderDetails = () => {
    // const [burger, setBurger] = useContext(DataBurger);
    const { burger, isLoading, hasError, order } = useSelector(store => store.burger);
    const ingredientsIdArray = burger.ingredients.map(item => item._id);
    // console.log(ingredientsIdArray);
    const dispatch = useDispatch();
    
    /* const [state, setState] = useState({
        isLoading: false,
        hasError: false,
        orderNumber: []
    }); */
    
    // const { isLoading, hasError } = state;
    
    /* setState({ ...state, hasError: false, isLoading: true });
    api.sendPostOrderToServer(ingredientsIdArray)
    .then((res) => setState({ ...state, isLoading: false, orderNumber: res.order.number }), setBurger({...burger, ingredients:[]}))
    .catch(() => {
        setState({ ...state, hasError: true, isLoading: false })
    }) */
    /* useEffect(() => {
        dispatch(getOrderNumber(ingredientsIdArray));
    }, []); */
    
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