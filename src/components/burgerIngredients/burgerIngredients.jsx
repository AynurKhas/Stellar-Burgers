import React from "react";
import { Choice } from "../choiceIngredients/ChoiceIngredients";
import Ingredients from "../ingredients/Ingredients";
import sb from './burgerIngredients.module.css';
import s from "../scroll/scroll.module.css";


export default class BurgerIngredients extends React.Component {

    render() {
        return (
            <section className={sb.menu}>
                <h1 className={`${sb.menu__title} text text_type_main-large`}>Соберите бургер</h1>
                <Choice />
                <ul className={`${sb.menu__container} ${s.scroll}`}>
                    <li className={sb["menu__container-items"]}>
                        <Ingredients type={"bun"}>Булки</Ingredients>
                    </li>
                    <li className={sb["menu__container-items"]}>
                        <Ingredients type={"sauce"}>Соусы</Ingredients>
                    </li>
                    <li className={sb["menu__container-items"]}>
                        <Ingredients type={"main"}>Начинки</Ingredients>
                    </li>
                </ul>
            </section>
        )
    }
}

