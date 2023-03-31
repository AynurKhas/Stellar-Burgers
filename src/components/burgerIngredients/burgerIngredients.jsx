import React from "react";
import { Choice } from "../choiceIngredients/ChoiceIngredients";
import Ingredients from "../ingredients/Ingredients";
import sb from './burgerIngredients.module.css';
import s from "../scroll/scroll.module.css";
import PropTypes from "prop-types";


export default function BurgerIngredients({data}) {
    return (
        <section className={sb.menu}>
            <h1 className={`${sb.menu__title} text text_type_main-large`}>Соберите бургер</h1>
            <Choice />
            <ul className={`${sb.menu__container} ${s.scroll}`}>
                <li className={sb["menu__container-items"]}>
                    <Ingredients data={data} type={"bun"}>Булки</Ingredients>
                </li>
                <li className={sb["menu__container-items"]}>
                    <Ingredients data={data} type={"sauce"}>Соусы</Ingredients>
                </li>
                <li className={sb["menu__container-items"]}>
                    <Ingredients data={data} type={"main"}>Начинки</Ingredients>
                </li>
            </ul>
        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.array.isRequired,
}