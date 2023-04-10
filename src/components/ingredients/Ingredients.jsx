import s from './Ingredients.module.css';
import Specification from "../specification/specification";
import PropTypes from "prop-types";
import { getIngredientName } from '../utils/utilities';
import { dataItemForPropTypes } from '../utils/constants';

const Ingredients = ({ data, type }) => {

    const ingredientName = getIngredientName(type);

    const arr = data.filter(item =>
        item.type === `${type}`
    )
    return (
        <>
            <h2 className={`${s.menu__subtitle} text text_type_main-medium`}>{ingredientName}</h2>
            <ul className={s.ingredients}>
                {arr.map(item => (
                    <Specification item={item} key={item._id} />
                )
                )}
            </ul>
        </>
    )
}

Ingredients.propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(dataItemForPropTypes).isRequired
};

export default Ingredients