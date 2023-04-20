import React from "react";
import  ChoiceIngredients  from "../choiceIngredients/ChoiceIngredients";
import Ingredients from "../ingredients/Ingredients";
import sb from './burgerIngredients.module.css';
import s from "../scroll/scroll.module.css";
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredientDetails/IngredientDetails";
import { useModal } from "../../hooks/useModal";
import { useDispatch } from 'react-redux'
import { TAKE_CURRENT_INGREDIENT } from "../../services/actions/burger";


const BurgerIngredients = () => {
    const dispatch = useDispatch();
    
    const [show, setShow] = React.useState(); 

    const { isModalOpen, openModal, closeModal } = useModal();
    
    const handleClick = (ingredient) => {
        openModal();
        dispatch({
            type: TAKE_CURRENT_INGREDIENT,
            payload: ingredient
        })
    } 

    const modal = (
        <Modal closeModal={closeModal} onClosEsc={closeModal}  title={'Детали ингридиента'} >
            <IngredientDetails />
        </ Modal>
    );

    return (
        <section className={sb.menu}>
            <h1 className={`${sb.menu__title} text text_type_main-large`}>Соберите бургер</h1>
            <ChoiceIngredients choice={(item) => setShow(item)} />
            { !show && <ul className={`${sb.menu__container} ${s.scroll}`}>
                <li className={sb["menu__container-items"]}>
                    <Ingredients type={"bun"} handleClick={handleClick} />
                </li>
                <li className={sb["menu__container-items"]}>
                    <Ingredients type={"sauce"} handleClick={handleClick} />
                </li>
                <li className={sb["menu__container-items"]}>
                    <Ingredients type={"main"} handleClick={handleClick} />
                </li>
            </ul>}
            { show && <ul className={`${sb.menu__container} ${s.scroll}`}>
                <li className={sb["menu__container-items"]}>
                    <Ingredients type={`${show}`} handleClick={handleClick} />
                </li>
            </ul>}
            {isModalOpen && modal}
        </section>
    )
}

export default BurgerIngredients