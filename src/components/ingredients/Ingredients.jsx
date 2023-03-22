import React from "react";
import { data } from "../utils/data";
import s from './Ingredients.module.css';
import Specification from "../specification/specification";
import PropTypes from "prop-types";

export default class Ingredients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
        }
    }

    render() {
        const arr = this.state.data.filter(item =>
            item.type === `${this.props.type}`
        )
        return (
            <>
            <h2 className={`${s.menu__subtitle} text text_type_main-medium`}>{this.props.children}</h2>
            <ul className={s.ingredients}>
                {arr.map(item => (
                    <Specification item={item} key={item._id} />
                )
                )}
            </ul>
        </>
        )
    }
}

/* Ingredients.propTypes = {
    type: PropTypes.string.isRequired
}; */
  
Ingredients.propTypes = {
    item: PropTypes.shape({
        proteins: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}.isRequired;