import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_REQUEST_FAILED,
    ADD_INGREDIENT_TO_BURGER_CONSTRUCTOR,
    TAKE_CURRENT_INGREDIENT,
    DELETE_DATA_ON_CLOSE,
    GET_ORDERNUMBER_REQUEST,
    GET_ORDERNUMBER_SUCCESS
} from '../actions/burger';

const initialState = {
    data: [],
    burger: {
        ingredients: [],
        //orderNumber: ''
    },
    currentIngredient: {},
    order: {
        orderNumber: ''
    },
    isLoading: false,
    hasError: false
}

export const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                data: action.items
            }
        }
        case GET_REQUEST_FAILED: {
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        }
        case GET_ORDERNUMBER_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_ORDERNUMBER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                burger: {
                    ...state.burger,
                    ingredients: []
                },
                order: {
                    ...state.order,
                    orderNumber: action.payload
                }
            }
        }    
        case ADD_INGREDIENT_TO_BURGER_CONSTRUCTOR: {
            return {
                ...state,
                burger: {
                    ...state.burger,
                    ingredients: action.payload
                }
            }
        }
        case TAKE_CURRENT_INGREDIENT: {
            return {
                ...state,
                currentIngredient: action.payload
            }
        }
        case DELETE_DATA_ON_CLOSE: {
            return {
                ...state,
                currentIngredient: {},
                /* order: {
                    ...state.order,
                    orderNumber: ''
                } */

            }
        }
        default:
            return state;
    }
}
