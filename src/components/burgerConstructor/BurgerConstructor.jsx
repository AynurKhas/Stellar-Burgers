import React from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import './BurgerConstructor.css'
import s from "../scroll/scroll.module.css";

export default class BurgerConstructor extends React.Component {

    render() {
        return (
            <section className="burgerConstructor">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: 'min-content', marginTop: '100px' }}>
                    <span className="burgerConstructor__span">
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
                        />
                    </span>
                    <ul className={`burgerConstructor__container ${s.scroll}`}>
                        <li className="burgerConstructor__container-items">
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Краторная булка N-200i (верх)"
                                price={50}
                                thumbnail={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
                            />
                        </li>
                        <li className="burgerConstructor__container-items">
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Краторная булка N-200i (верх)"
                                price={50}
                                thumbnail={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
                            />
                        </li>
                        <li className="burgerConstructor__container-items">
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Краторная булка N-200i (верх)"
                                price={50}
                                thumbnail={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
                            />
                        </li>
                        <li className="burgerConstructor__container-items">
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Краторная булка N-200i (верх)"
                                price={50}
                                thumbnail={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
                            />
                        </li>
                        <li className="burgerConstructor__container-items">
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Краторная булка N-200i (верх)"
                                price={50}
                                thumbnail={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
                            />
                        </li>
                    </ul>
                    <span className="burgerConstructor__span">
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text="Краторная булка N-200i (низ)"
                            price={200}
                            thumbnail={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
                        />
                    </span>
                </div>
            </section>
        )
    }
}