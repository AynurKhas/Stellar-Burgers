import React, { useMemo } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import sb from './BurgerConstructor.module.css'
import s from "../scroll/scroll.module.css";
import OrderDetails from "../orderDetails/OrderDetails";
import Modal from "../modal/Modal";
import { bun } from "../../utils/constants";
import Total from "../total/Total";
import { useModal } from "../../hooks/useModal";
import { useDispatch, useSelector } from 'react-redux'
import { useDrop } from "react-dnd";
import { ADD_INGREDIENT_TO_BURGER_CONSTRUCTOR } from "../../services/actions/burgerConstructor";
import { BurgerItem } from "../burgerItem/BurgerItem";

const BurgerConstructor = () => {
    const { data } = useSelector(store => store.burger)
    const { burger } = useSelector(store => store.burgerConstructor)
    const { isModalOpen, openModal, closeModal } = useModal();
    const dispatch = useDispatch();

    const burgerArrayNoEmpty = burger.ingredients.length !== 0;

    const [, drop] = useDrop({
        accept: 'ingredient',
        drop(itemId) {
            const [ingredient] = ingredientArr(itemId);
            const ingredientWithIndex = { ...ingredient, index: ingredient.type === bun ? burger.bun : burger.key };
            if (burger.ingredients.length === 0 && ingredientWithIndex.type === bun) {
                dispatch({
                    type: ADD_INGREDIENT_TO_BURGER_CONSTRUCTOR,
                    payload: [ingredientWithIndex],
                    index: 0
                })
            } else if (findBunInBurger(burger.ingredients, bun) && ingredientWithIndex.type === bun) {
                dispatch({
                    type: ADD_INGREDIENT_TO_BURGER_CONSTRUCTOR,
                    payload: [...burger.ingredients.slice(0, findIndexBun(burger.ingredients, bun)), ingredientWithIndex, ...burger.ingredients.slice(findIndexBun(burger.ingredients, bun) + 1)],
                    index: 0
                })
            } else {
                dispatch({
                    type: ADD_INGREDIENT_TO_BURGER_CONSTRUCTOR,
                    payload: [...burger.ingredients, ingredientWithIndex],
                    index: 1
                })
            }
        },
    })

    const ingredientArr = (itemId) => data.filter(item => (
        item._id === itemId.id));

    const findBunInBurger = (arr, bun) => {
        return arr.find(item => item.type === bun)
    }

    const findIndexBun = (arr, type) => {
        return arr.findIndex(el => el.type === type)
    }


    const bunInBurger = useMemo(() => burger.ingredients.find(item => item.type === bun), [burger.ingredients]);

    const arrNoBun = useMemo(() => burger.ingredients.filter(item => (
        item.type !== bun)), [burger.ingredients]);

    /* const message = (
        <div className={sb.massege}>
            <p className="text text_type_main-medium">Добавьте ингредиенты!</p>
        </div>
    ) */

    const modal = (
        <Modal closeModal={closeModal} onClosEsc={closeModal}>
            <OrderDetails />
        </ Modal>
    );

    return (
        <section className={sb.burgerConstructor}>
            <>
                <div ref={drop} className={sb.container} >
                    <span className={sb.burgerConstructor__span}>
                        {bunInBurger && <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${bunInBurger.name} (верх)`}
                            price={bunInBurger.price}
                            thumbnail={bunInBurger.image_mobile} />}
                    </span>
                    <ul className={`${sb.burgerConstructor__container} ${s.scroll}`} >
                        {arrNoBun && arrNoBun.map((item, index) => (
                            <BurgerItem item={item} key={item.index} index={index} />
                        ))}
                    </ul>
                    <span className={sb.burgerConstructor__span}>
                        {bunInBurger && <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${bunInBurger.name} (вниз)`}
                            price={bunInBurger.price}
                            thumbnail={bunInBurger.image_mobile} />}
                    </span>
                </div>
                {burgerArrayNoEmpty && <Total openModal={openModal} />}
            </>
            {isModalOpen && modal}
        </section>
    )
}

export default React.memo(BurgerConstructor)