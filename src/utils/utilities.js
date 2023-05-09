import { bun, main, sauce } from "./constants";

export const getIngredientName = (type) => {
    let ingredient;
    switch (type) {
        case bun:
            ingredient = "Булки"
            break;
        case sauce:
            ingredient = "Соусы"
            break;
        case main:
            ingredient = "Начинки"
            break;
        default:
            ingredient = "Булки"
    }
    return ingredient;
};