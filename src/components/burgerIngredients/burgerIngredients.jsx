import React from "react";
import  ChoiceIngredients  from "../choiceIngredients/ChoiceIngredients";
import Ingredients from "../ingredients/Ingredients";
import sb from './burgerIngredients.module.css';
import s from "../scroll/scroll.module.css";


const BurgerIngredients = () => {
    const [show, setShow] = React.useState();    

    return (
        <section className={sb.menu}>
            <h1 className={`${sb.menu__title} text text_type_main-large`}>Соберите бургер</h1>
            <ChoiceIngredients choice={(item) => setShow(item)} />
            { !show && <ul className={`${sb.menu__container} ${s.scroll}`}>
                <li className={sb["menu__container-items"]}>
                    <Ingredients type={"bun"} />
                </li>
                <li className={sb["menu__container-items"]}>
                    <Ingredients type={"sauce"} />
                </li>
                <li className={sb["menu__container-items"]}>
                    <Ingredients type={"main"} />
                </li>
            </ul>}
            { show && <ul className={`${sb.menu__container} ${s.scroll}`}>
                <li className={sb["menu__container-items"]}>
                    <Ingredients type={`${show}`} />
                </li>
            </ul>}
        </section>
    )
}

export default BurgerIngredients