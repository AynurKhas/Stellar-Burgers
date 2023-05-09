import { useEffect, useState } from "react";
import ChoiceIngredients from "../choiceIngredients/ChoiceIngredients";
import Ingredients from "../ingredients/Ingredients";
import sb from './burgerIngredients.module.css';
import s from "../scroll/scroll.module.css";
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredientDetails/IngredientDetails";
import { useModal } from "../../hooks/useModal";
import { TAKE_CURRENT_INGREDIENT, getIngredients } from "../../services/actions/dataIngredients";
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from "react-intersection-observer";
import { bun, main, sauce } from "../../utils/constants";


const BurgerIngredients = () => {
    const { data, isLoading, hasError } = useSelector(store => store.burger);
    const { isModalOpen, openModal, closeModal } = useModal();
    const dispatch = useDispatch();

    const [activeTab, setActiveTab] = useState(bun);
    const [ref1, inView1, entry1 ] = useInView({ threshold: 0.2 });
    const [ref2, inView2, entry2 ] = useInView({ threshold: 0.2 });
    const [ref3, inView3, entry3 ] = useInView({ threshold: 0.2 });
    
    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);
    
    useEffect(() => {
        inView1 && setActiveTab(bun);
        inView2 && setActiveTab(sauce);
        inView3 && setActiveTab(main);
    }, [inView1, inView2, inView3]);
    
    const handleClick = (ingredient) => {
        openModal();
        dispatch({
            type: TAKE_CURRENT_INGREDIENT,
            payload: ingredient
        })
    }
    
    const modal = (
        <Modal closeModal={closeModal} onClosEsc={closeModal} title={'Детали ингридиента'} >
            <IngredientDetails />
        </ Modal>
    );

    return (
        <>
            {isLoading && 'Загрузка...'}
            {hasError && 'Произошла ошибка'}
            {!isLoading &&
                !hasError &&
                data.length &&
                <section className={sb.menu}>
                    <h1 className={`${sb.menu__title} text text_type_main-large`}>Соберите бургер</h1>
                    <ChoiceIngredients activeTab={activeTab} />
                    {<ul className={`${sb.menu__container} ${s.scroll}`} >
                        <li className={sb["menu__container-items"]} id="bun" ref={ref1} >
                            <Ingredients type={"bun"} handleClick={handleClick} />
                        </li>
                        <li className={sb["menu__container-items"]} id="sauce" ref={ref2} >
                            <Ingredients type={"sauce"} handleClick={handleClick}/>
                        </li>
                        <li className={sb["menu__container-items"]} id="main" ref={ref3} >
                            <Ingredients type={"main"} handleClick={handleClick} />
                        </li>
                    </ul>}
                    {isModalOpen && modal}
                </section>}
        </>
    )
}

export default BurgerIngredients