import React from "react";
import { Choice } from "../choiceIngredients/ChoiceIngredients";
import Ingredients from "../ingredients/Ingredients";
import sb from './burgerIngredients.module.css';
import s from "../scroll/scroll.module.css";
import PropTypes from "prop-types";


export default function BurgerIngredients({ data }) {
    const [show, setShow] = React.useState();
    
    const heandleChoice = (item) => {
        setShow(item);
    }

    return (
        <section className={sb.menu}>
            <h1 className={`${sb.menu__title} text text_type_main-large`}>Соберите бургер</h1>
            <Choice choice={heandleChoice} />
            { !show && <ul className={`${sb.menu__container} ${s.scroll}`}>
                <li className={sb["menu__container-items"]}>
                    <Ingredients data={data} type={"bun"} />
                </li>
                <li className={sb["menu__container-items"]}>
                    <Ingredients data={data} type={"sauce"} />
                </li>
                <li className={sb["menu__container-items"]}>
                    <Ingredients data={data} type={"main"} />
                </li>
            </ul>}
            { show && <ul className={`${sb.menu__container} ${s.scroll}`}>
                <li className={sb["menu__container-items"]}>
                    <Ingredients data={data} type={`${show}`} />
                </li>
            </ul>}
        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.array.isRequired,
}