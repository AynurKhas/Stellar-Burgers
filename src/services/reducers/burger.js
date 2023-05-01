import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_REQUEST_FAILED,
    TAKE_CURRENT_INGREDIENT,
    DELETE_DATA_ON_CLOSE,
} from '../actions/burger';

const initialState = {
    data: [],
    currentIngredient: {},
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
        case TAKE_CURRENT_INGREDIENT: {
            return {
                ...state,
                currentIngredient: action.payload
            }
        }
        case DELETE_DATA_ON_CLOSE: {
            return {
                ...state,
                currentIngredient: {}
            }
        }
        default:
            return state;
    }
}
