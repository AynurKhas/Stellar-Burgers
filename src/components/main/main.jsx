import React from "react";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import './main.css'

function Main() {
    return (
        <main className="main">
            <BurgerIngredients />
            <BurgerConstructor/>
        </main>
    )
    
}

export default Main