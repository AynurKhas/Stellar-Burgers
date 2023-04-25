import { getData, sendPostOrderToServer } from "../../utils/burger-api.js";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_REQUEST_FAILED = 'GET_REQUEST_FAILED';

export const GET_ORDERNUMBER_REQUEST = 'GET_ORDERNUMBER_REQUEST';
export const GET_ORDERNUMBER_SUCCESS = 'GET_ORDERNUMBER_SUCCESS';

export const ADD_INGREDIENT_TO_BURGER_CONSTRUCTOR = 'ADD_INGREDIENT_TO_BURGER_CONSTRUCTOR';
export const TAKE_CURRENT_INGREDIENT = 'TAKE_CURRENT_INGREDIENT';
export const DELETE_DATA_ON_CLOSE = 'DELETE_DATA_ON_CLOSE';

export function getIngredients() {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        });
        getData()
            .then(res => {
                res.success
                    ? dispatch({
                        type: GET_INGREDIENTS_SUCCESS,
                        items: res.data
                    })
                    : dispatch({
                        type: GET_REQUEST_FAILED
                    });
            }).catch(() => {
                dispatch({
                    type: GET_REQUEST_FAILED
                });
                alert("Во время загрузки произошла ошибка");
            })
    }
}

export function getOrderNumber(array) {
    return function (dispatch) {
        dispatch({
            type: GET_ORDERNUMBER_REQUEST
        });
        sendPostOrderToServer(array)
            .then(res => {
                res.success
                    ? dispatch({
                        type: GET_ORDERNUMBER_SUCCESS,
                        payload: res.order.number
                    })
                    : dispatch({
                        type: GET_REQUEST_FAILED
                    });
            }).catch(() => {
                dispatch({
                    type: GET_REQUEST_FAILED
                });
                alert("Во время загрузки произошла ошибка");
            })
    }
}
