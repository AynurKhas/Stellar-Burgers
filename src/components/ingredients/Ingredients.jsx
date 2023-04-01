import React from "react";
import s from './Ingredients.module.css';
import Specification from "../specification/specification";
import PropTypes from "prop-types";

export default function Ingredients({ data, type }) {
    const [state, setState] = React.useState({
        data: data,
    });

    let ingredient;
    switch (type) {
        case "bun": 
            ingredient = "Булки"
            break;
        case "sauce":
            ingredient = "Соусы"
            break;
        case "main": 
            ingredient = "Начинки"
            break;
    }

    const arr = state.data.filter(item =>
        item.type === `${type}`
    )
    return (
        <>
            <h2 className={`${s.menu__subtitle} text text_type_main-medium`}>{ingredient}</h2>
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