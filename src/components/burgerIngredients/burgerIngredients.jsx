import React from "react";
import  ChoiceIngredients  from "../choiceIngredients/ChoiceIngredients";
import Ingredients from "../ingredients/Ingredients";
import sb from './burgerIngredients.module.css';
import s from "../scroll/scroll.module.css";
import PropTypes from "prop-types";
import { dataItemForPropTypes } from "../utils/constants";


const BurgerIngredients = ({ data }) => {
    const [show, setShow] = React.useState();    

    return (
        <section className={sb.menu}>
            <h1 className={`${sb.menu__title} text text_type_main-large`}>Соберите бургер</h1>
            <ChoiceIngredients choice={(item) => setShow(item)} />
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
    data: PropTypes.arrayOf(dataItemForPropTypes).isRequired,
}

export default BurgerIngredients