import { useContext, useState } from "react";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import s from './Specification.module.css';
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../modal/Modal";
import { bun, dataItemForPropTypes } from "../utils/constants";
import { DataBurger } from "../../services/productsContext";
// import PropTypes from "prop-types";

const Specification = ({ item }) => {
    const [burger, setBurger] = useContext(DataBurger);
    const [showModal, setShowModal] = useState(false);
    
    
    
    const findBunInBurger = (arr, bun) => {
        return arr.find(item => item.type === bun)
    }
    
    const findInexBun = (arr, type) => {
        return arr.findIndex(el => el.type === type)
    }
    
    const handleRightMouseButton = () => {
        if (burger.ingredients.length === 0) {  
            setBurger({
                ...burger,
                ingredients: [item]});
        } else if (findBunInBurger(burger.ingredients, bun) && item.type === bun) {            
            setBurger({
                ...burger,
                ingredients: [...burger.ingredients.slice(0, findInexBun(burger.ingredients, bun)), item, ...burger.ingredients.slice(findInexBun(burger.ingredients, bun) + 1)]});
        } else {
            setBurger({
                ...burger,
                ingredients: [...burger.ingredients, item]
            });
        }
    }

    const modal = (
        <Modal setShowModal={setShowModal} onClosEsc={() => setShowModal(false)}>
            <IngredientDetails product={item} setShowModal={setShowModal} />
        </ Modal>
    );

    return (
        <li className={s.ingredients__items} style={{ overflow: 'hidden' }} onClick={() => setShowModal(true)} onContextMenu={handleRightMouseButton} >
            <article className={s.specification} >
                <img src={`${item.image}`} alt={`${item.name}`} className={s.specification__img} />
                <ul className={s.specification__container}>
                    <li className={s["specification__container-item"]}>
                        <p className={`${s["specification__container-item-proteins"]} text text_type_digits-default`}>{item.price}</p>
                        <CurrencyIcon type="primary" />
                    </li>
                    <li className={s["specification__container-item"]}>
                        <p className={`$["specification__container-item-name"] text text_type_main-default`}>{item.name}</p>
                    </li>
                </ul>
                <Counter count={1} size="default" extraClass="m-1" />
                {/* {{state.count && <Counter count={1} size="default" extraClass="m-1" />}} */}
            </article>
            {showModal && modal}
        </li>
    )
}

Specification.propTypes = {
    item: dataItemForPropTypes.isRequired,
    // burger: PropTypes.arrayOf(dataItemForPropTypes)
}

export default Specification