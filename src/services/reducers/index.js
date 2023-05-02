import { combineReducers } from '@reduxjs/toolkit';
import { burgerReducer } from './dataIngredients';
import { burgerConstructorReducer } from './burgerConstructor';

export const rootReducer = combineReducers({
    burger: burgerReducer,
    burgerConstructor: burgerConstructorReducer
})