import React from "react";
import s from './Ingredients.module.css';
import Specification from "../specification/specification";
import PropTypes from "prop-types";

export default function Ingredients({data, type ,children}) {
    const [state, setState] = React.useState({
        data: data,
    });

    const arr = state.data.filter(item =>
        item.type === `${type}`
    )
    return (
        <>
        <h2 className={`${s.menu__subtitle} text text_type_main-medium`}>{children}</h2>
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
    data: PropTypes.array.isRequired,
    children: PropTypes.string
  };