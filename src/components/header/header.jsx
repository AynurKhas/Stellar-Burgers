import React from "react";
import './header.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';

function HeaderTextElement({active, children}) {
    return <p className={`text text_type_main-default ${active}`}>{ children }</p>
}

function AppHeader() {
    return (
        <header className="header p-4">
            <ul className="header__elementsContainer">
                <li className="header__elementsContainerItems">
                <button type="button" className="header__element">
                    <BurgerIcon type="primary" />
                    <HeaderTextElement active={""}>Конструктор</HeaderTextElement>
                </button>
                </li>
                <li className="header__elementsContainerItems">
                <button type="button" className="header__element ">
                    <ListIcon type="secondary" />
                    <HeaderTextElement active={""}>Лента заказов</HeaderTextElement>
                </button>
                </li>
            </ul>
            <a href="/" className="header__logo"><Logo /></a>
            <button type="button" className="header__element">
                <ProfileIcon type="secondary" />
                <HeaderTextElement active={""}>Личный кабинет</HeaderTextElement>
            </button>
        </header>
    )
}

export default AppHeader