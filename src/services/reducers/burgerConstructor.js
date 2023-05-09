import {
    GET_REQUEST_FAILED,
    ADD_INGREDIENT_TO_BURGER_CONSTRUCTOR,
    GET_ORDERNUMBER_REQUEST,
    GET_ORDERNUMBER_SUCCESS,
    GET_MOVE_INGREDIENT,
    GET_MOVE_INGREDIENT_CURRENT_MOMENT,
    GET_DELETE_INGREDIENT
} from '../actions/burgerConstructor';

const initialState = {
    burger: {
        ingredients: [],
    },
    order: {
        orderNumber: ''
    },
    isLoading: false,
    hasError: false
}

export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
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
                    ingredients: [],
                    // key: 0
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
                    ingredients: action.payload,
                }
            }
        }
        case GET_MOVE_INGREDIENT: {
            return {
                ...state,
                burger: {
                    ...state.burger,
                    ingredients: action.payload,
                }
            }
        }
        case GET_MOVE_INGREDIENT_CURRENT_MOMENT: {
            return {
                ...state,
                burger: {
                    ...state.burger,
                    ingredients: action.payload,
                }
            }
        }
        case GET_DELETE_INGREDIENT: {
            return {
                ...state,
                burger: {
                    ...state.burger,
                    ingredients: state.burger.ingredients.filter(el => el.uuid !== action.payload)
                }
            }
        }
        default:
            return state;
    }
}
