import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import sb from './total.module.css'
import { useContext, useMemo, useReducer } from 'react';
import { DataBurger } from "../../services/productsContext";
import { bun, main, sauce } from '../utils/constants';
import PropTypes from "prop-types";

const Total = ({ setShowModal }) => {
    const [burger] = useContext(DataBurger);

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
            <p className="text text_type_digits-medium" style={{ paddingRight: '9.5px' }}>{state.count}</p>
            <CurrencyIcon type="primary" />
            <Button htmlType="button" type="primary" size="large" style={{ marginLeft: '16px' }} onClick={() => setShowModal(true)} >
                Оформить заказ
            </Button>
        </div>
    )
}

Total.propTypes = {
    setShowModal: PropTypes.func.isRequired
}

export default Total
