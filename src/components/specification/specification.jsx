import { useContext } from "react";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import s from './Specification.module.css';
import { bun, dataItemForPropTypes } from "../../utils/constants";
import { DataBurger } from "../../services/productsContext";

const Specification = ({ item, handleClick }) => {
    const [burger, setBurger] = useContext(DataBurger);
    
    
    
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

    const countСounter = burger.ingredients.filter(el => el._id === item._id).length;

    return (
        <li className={s.ingredients__items} onClick={() => handleClick(item)} onContextMenu={handleRightMouseButton} >
            <article className={s.specification} >
                <img src={`${item.image}`} alt={`${item.name}`} className={s.specification__img} />
                <ul className={s.specification__container}>
                    <li className={s["specification__container-item"]}>
                        <p className={`${s["specification__container-item-proteins"]} text text_type_digits-default`}>{item.price}</p>
                        <CurrencyIcon type="primary" />
                    </li>
                    <li className={s["specification__container-item"]}>
                        <p className={`${s["specification__container-item-name"]} text text_type_main-default`}>{item.name}</p>
                    </li>
                </ul>
                {(countСounter > 0) && <Counter count={countСounter} size="default" extraClass="m-1" />}                
            </article>
        </li>
    )
}

Specification.propTypes = {
    item: dataItemForPropTypes.isRequired,
}

export default Specification