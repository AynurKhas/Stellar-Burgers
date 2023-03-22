import React from "react";
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import sb from './BurgerConstructor.module.css'
import s from "../scroll/scroll.module.css";
import PropTypes from "prop-types";
import { data } from "../utils/data";


export default class BurgerConstructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }

    render() {
        const arrBun = this.state.data.filter(item => (
            item.type === "bun"))

        const arrNoBun = this.state.data.filter(item => (
            item.type !== "bun"))

        const total = arrBun[0].price + arrNoBun.reduce((acc, p) => acc + p.price, 0)

        return (
            <section className={sb.burgerConstructor}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: 'min-content', marginTop: '100px' }}>
                    <span className={sb.burgerConstructor__span}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={arrBun[0].name}
                            price={arrBun[0].price}
                            thumbnail={arrBun[0].image_mobile} />
                    </span>
                    <ul className={`${sb.burgerConstructor__container} ${s.scroll}`}>
                        {arrNoBun.map(item => (
                            <li className={sb["burgerConstructor__container-items"]}  key={item._id}>
                                <DragIcon type="primary" />
                                <ConstructorElement
                                    text={item.name}
                                    price={item.price}
                                    thumbnail={item.image_mobile} />
                            </li>
                        ))}
                    </ul>
                    <span className={sb.burgerConstructor__span}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={arrBun[0].name}
                            price={arrBun[0].price}
                            thumbnail={arrBun[0].image_mobile} />
                    </span>

                </div>
                <div className={`${sb.order} mt-10 pr-4`}>
                    <p className="text text_type_digits-medium" style={{ paddingRight: '9.5px' }}>{total}</p>
                    <CurrencyIcon type="primary" />
                    <Button htmlType="button" type="primary" size="large" style={{ marginLeft: '16px' }}>
                        Оформить заказ
                    </Button>
                </div>
            </section>
        )
    }
}


BurgerConstructor.propTypes = {
    item: PropTypes.shape({
        proteins: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}.isRequired;