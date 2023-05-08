import { sendPostOrderToServer } from "../../utils/burger-api.js";


export const GET_REQUEST_FAILED = 'GET_REQUEST_FAILED';
export const GET_ORDERNUMBER_REQUEST = 'GET_ORDERNUMBER_REQUEST';
export const GET_ORDERNUMBER_SUCCESS = 'GET_ORDERNUMBER_SUCCESS';
export const ADD_INGREDIENT_TO_BURGER_CONSTRUCTOR = 'ADD_INGREDIENT_TO_BURGER_CONSTRUCTOR';
export const GET_MOVE_INGREDIENT = 'GET_MOVE_INGREDIENT';
export const GET_DELETE_INGREDIENT = 'GET_DELETE_INGREDIENT';
export const GET_MOVE_INGREDIENT_CURRENT_MOMENT = 'GET_MOVE_INGREDIENT_CURRENT_MOMENT';


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