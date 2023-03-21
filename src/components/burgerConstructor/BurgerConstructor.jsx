import React from "react";
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import sb from './BurgerConstructor.module.css'
import s from "../scroll/scroll.module.css";
import PropTypes from "prop-types";

export default class BurgerConstructor extends React.Component {

    render() {
        return (
            <section className={sb.burgerConstructor}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: 'min-content', marginTop: '100px' }}>
                    <span className={sb.burgerConstructor__span}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
                        />
                    </span>
                    <ul className={`${sb.burgerConstructor__container} ${s.scroll}`}>
                        <li className={sb["burgerConstructor__container-items"]}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Краторная булка N-200i (верх)"
                                price={50}
                                thumbnail={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
                            />
                        </li>
                        <li className={sb["burgerConstructor__container-items"]}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Краторная булка N-200i (верх)"
                                price={50}
                                thumbnail={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
                            />
                        </li>
                        <li className={sb["burgerConstructor__container-items"]}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Краторная булка N-200i (верх)"
                                price={50}
                                thumbnail={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
                            />
                        </li>
                        <li className={sb["burgerConstructor__container-items"]}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Краторная булка N-200i (верх)"
                                price={50}
                                thumbnail={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
                            />
                        </li>
                        <li className={sb["burgerConstructor__container-items"]}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Краторная булка N-200i (верх)"
                                price={50}
                                thumbnail={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
                            />
                        </li>
                    </ul>
                    <span className={sb.burgerConstructor__span}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text="Краторная булка N-200i (низ)"
                            price={200}
                            thumbnail={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
                        />
                    </span>
                </div>
                <div className={`${sb.order} mt-10 pr-4`}>
                    <p className="text text_type_digits-medium" style={{paddingRight: '9.5px'}}>610</p>
                    <CurrencyIcon type="primary" />
                    <Button htmlType="button" type="primary" size="large" style={{marginLeft: '16px'}}>
                        Оформить заказ
                    </Button>
                </div>
            </section>
        )
    }
}
  
BurgerConstructor.propTypes = {
    text: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired
  }