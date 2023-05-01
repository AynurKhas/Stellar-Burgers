import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import sb from './total.module.css'
import { useMemo, useReducer } from 'react';
import { bun, main, sauce } from '../../utils/constants';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'

const Total = ({ openModal }) => {
    const { burger } = useSelector(store => store.burgerConstructor)

    const initialState = { count: 0 };
    const reset = {
        type: 'reset',
        payload: { initialState }
    }
    const [state, dispatch] = useReducer(reducer, initialState, init);

    function reducer(state, action) {
        switch (action.type) {
            case bun:
                return { ...state, count: state.count + (action.price * 2) };
            case sauce:
                return { ...state, count: state.count + action.price };
            case main:
                return { ...state, count: state.count + action.price };
            case 'reset':
                return init(action.payload);
            default:
                throw new Error(`Wrong type of action: ${action.type}`);
        }
    }

    function init() {
        return initialState
    }

    useMemo(() => {
        dispatch(reset)
        burger.ingredients.forEach(item => {
            dispatch(item)
        })
    }, [burger.ingredients])

    return (
        <div className={`${sb.order} mt-10 pr-4`}>
            <p className={`${sb.order__totalPrice} text text_type_digits-medium`} >{state.count}</p>
            <CurrencyIcon type="primary" />
            <Button htmlType="button" type="primary" size="large" /* className={sb.order__button} */ style={{ marginLeft: '16px' }} onClick={openModal} >
                Оформить заказ
            </Button>
        </div>
    )
}

Total.propTypes = {
    openModal: PropTypes.func.isRequired
}

export default Total
