import React from "react";
import s from './header.module.css';
import './header.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';
import PropTypes from "prop-types";

function HeaderTextElement({ active, children }) {
    return <p className={`text text_type_main-default ${active}`}>{children}</p>
}

function AppHeader() {
    return (
        <header className={`${s.header} p-4`}>
            <nav className={s.header__menu}>
                <ul className={s.header__elementsContainer}>
                    <li className={s.header__elementsContainerItems}>
                        <button type="button" className={s.header__element}>
                            <BurgerIcon type="primary" />
                            <HeaderTextElement active={""}>Конструктор</HeaderTextElement>
                        </button>
                    </li>
                    <li className={s.header__elementsContainerItems}>
                        <button type="button" className={s.header__element}>
                            <ListIcon type="secondary" />
                            <HeaderTextElement active={"text_color_inactive"}>Лента заказов</HeaderTextElement>
                        </button>
                    </li>
                </ul>
                <a href="/" className={s.header__logo}><Logo /></a>
                <button type="button" className={s.header__element}>
                    <ProfileIcon type="secondary" />
                    <HeaderTextElement active={"text_color_inactive"}>Личный кабинет</HeaderTextElement>
                </button>
            </nav>
        </header>
    )
}

AppHeader.propTypes = {
    active: PropTypes.string
  };

export default AppHeader