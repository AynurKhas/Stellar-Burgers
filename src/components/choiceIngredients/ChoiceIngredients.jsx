import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import s from './choiceIngredients.module.css';
import { useEffect, useState } from "react";
import PropTypes from "prop-types";


const ChoiceIngredients = ({activeTab}) => {
    const [current, setCurrent] = useState('bun');
    
    useEffect(() => {
        setCurrent(activeTab);
    }, [activeTab]);
    
    const onTabClick = (current) => {
        setCurrent(current);
        const element = document.getElementById(current);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }
   
    return (
        <div className={s.containerChoice} onScroll={onTabClick} >
            <Tab value="bun" active={current === 'bun'} onClick={onTabClick}>
                Булки
            </Tab>
            <Tab value="sauce" active={current === 'sauce'} onClick={onTabClick}>
                Соусы
            </Tab>
            <Tab value="main" active={current === 'main'} onClick={onTabClick}>
                Начинки
            </Tab>
        </div>
    )
}

ChoiceIngredients.propTypes = {
    activeTab: PropTypes.string.isRequired,
}

export default ChoiceIngredients