import React from "react";
import './burgerIngredients.css';
import { Choice } from "../choiceIngredients/ChoiceIngredients";
import Ingredients from "../ingredients/Ingredients";
import s from "../scroll/scroll.module.css";


export default class BurgerIngredients extends React.Component {

    render() {
        return (
            <section className="menu">
                <h1 className="menu__title text text_type_main-large">Соберите бургер</h1>
                <Choice />
                <ul className={`menu__container ${s.scroll}`}>
                    <li className="menu__container-items">
                        <Ingredients type={"bun"}>Булки</Ingredients>
                    </li>
                    <li className="menu__container-items">
                        <Ingredients type={"sauce"}>Соусы</Ingredients>
                    </li>
                    <li className="menu__container-items">
                        <Ingredients type={"main"}>Начинки</Ingredients>
                    </li>
                </ul>
            </section>
        )
    }
}