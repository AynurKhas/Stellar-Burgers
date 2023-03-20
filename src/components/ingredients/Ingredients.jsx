import React from "react";
import { data } from "../utils/data";
import './Ingredients.css';
import Specification from "../specification/specification";

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
            <h2 className="menu__subtitle text text_type_main-medium">{this.props.children}</h2>
            <ul className="ingredients">
                {arr.map(item => (
                    <Specification item={item} key={item._id} />
                )
                )}
            </ul>
        </>
        )
    }
}