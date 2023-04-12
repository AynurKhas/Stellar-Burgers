import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import sb from './total.module.css'
import { useContext, useMemo, useReducer } from 'react';
import { DataBurger } from "../../services/productsContext";
import { bun, dataItemForPropTypes, main, sauce } from '../utils/constants';
// import PropTypes from "prop-types";

const Total = ({ setShowModal }) => {
    const [burger] = useContext(DataBurger);

    const initialState = { count: 0 };
    const reset = {
        type: 'reset',
        payload: initialState
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
        return { count: 0 }
    }

    useMemo(() => {
        dispatch(reset)
        burger.ingredients.forEach(item => {
            dispatch(item)
        })
    }, [burger.ingredients])


    /* const total = useMemo(() => {
        return (burger.ingredients.length !== 0 && burger.ingredients.find(item => item.type === bun))
            ? (burger.ingredients.find(item => item.type === bun).price * 2) + burger.ingredients.filter(item => item.type !== bun).reduce((acc, p) => acc + p.price, 0)
            : burger.ingredients.filter(item => item.type !== bun).reduce((acc, p) => acc + p.price, 0)
    }, [burger.ingredients]); */


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

/* Total.propTypes = {
    burger: PropTypes.arrayOf(dataItemForPropTypes)
} */

export default Total
