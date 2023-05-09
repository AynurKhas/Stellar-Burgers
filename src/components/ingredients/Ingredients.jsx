import s from './Ingredients.module.css';
import Specification from "../specification/specification";
import PropTypes from "prop-types";
import { getIngredientName } from '../../utils/utilities';
import { useSelector } from 'react-redux'

const Ingredients = ({ type, handleClick }) => {

    const { data } = useSelector(store => store.burger);
    const ingredientName = getIngredientName(type);

    const arr = data.filter(item =>
        item.type === `${type}`
    )

    return (
        <>
            <h2 className={`${s.menu__subtitle} text text_type_main-medium`}>{ingredientName}</h2>
            <ul className={s.ingredients}>
                {arr.map((item, index) => (
                    <Specification item={item} key={index} handleClick={handleClick} id={item._id} />
                )
                )}
            </ul>
        </>
    )
}

Ingredients.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Ingredients