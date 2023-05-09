import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import s from './Specification.module.css';
import PropTypes from "prop-types";
import { dataItemForPropTypes } from "../../utils/constants";
import { useSelector } from 'react-redux'
import { useDrag } from "react-dnd";

const Specification = ({ item, handleClick, id }) => {
    const { burger } = useSelector(store => store.burgerConstructor)

    const [{ isDrag }, drag] = useDrag({
        type: "ingredient",
        item: { id },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    const countСounter = burger.ingredients.filter(el => el._id === item._id).length;

    return (
        <li ref={drag} className={s.ingredients__items} onClick={() => handleClick(item)} >
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
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

export default Specification