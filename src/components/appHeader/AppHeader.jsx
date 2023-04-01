import s from './AppHeader.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';
import PropTypes from "prop-types";

const HeaderTextElement = ({ active, children }) => {
    return <p className={`text text_type_main-default ${active}`}>{children}</p>
}

const AppHeader = () => {
    return (
        <header className={`${s.header} p-4`}>
            <nav className={s.header__menu}>
                <ul className={s.header__elementsContainer}>
                    <li className={s.header__elementsContainerItems}>
                        <a href="/" className={s.header__element}>
                            <BurgerIcon type="primary" />
                            <HeaderTextElement active={""}>Конструктор</HeaderTextElement>
                        </a>
                    </li>
                    <li className={s.header__elementsContainerItems}>
                        <a href="/" className={s.header__element}>
                            <ListIcon type="secondary" />
                            <HeaderTextElement active={"text_color_inactive"}>Лента заказов</HeaderTextElement>
                        </a>
                    </li>
                </ul>
                <a href="/" className={s.header__logo}><Logo /></a>
                <a href="/" className={s.header__element}>
                    <ProfileIcon type="secondary" />
                    <HeaderTextElement active={"text_color_inactive"}>Личный кабинет</HeaderTextElement>
                </a>
            </nav>
        </header>
    )
}

AppHeader.propTypes = {
    active: PropTypes.string
};
  
HeaderTextElement.propTypes = {
    children: PropTypes.string,
    active: PropTypes.string.isRequired
}

export default AppHeader