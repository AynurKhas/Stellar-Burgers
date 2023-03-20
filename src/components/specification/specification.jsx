import React from "react";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import './Specification.css';

export default class Specification extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: false };
    }    
    
    render() {
        const item = this.props.item;
        
        return (
            <li className="ingredients__items" >
            <article className="specification">
                <img src={`${item.image}`} alt={`${item.name}`} className="specification__img" />
                <ul className="specification__container">
                    <li className="specification__container-item">
                        <p className="specification__container-item-proteins text text_type_digits-default">{item.proteins}</p>
                        <CurrencyIcon type="primary" />
                    </li>
                    <li className="specification__container-item">
                        <p className="specification__container-item-name text text_type_main-default">{item.name}</p>
                    </li>
                </ul>
                {this.state.count && <Counter count={1} size="default" extraClass="m-1" />}
            </article>
            </li>
        )
    }
}