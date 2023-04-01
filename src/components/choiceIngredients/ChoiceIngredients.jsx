import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";


const ChoiceIngredients = ({ choice }) => {
    const [current, setCurrent] = React.useState();

    const heandleChoice = (current) => {
        setCurrent(current);
        choice(current);
    }

    return (
        <div style={{ display: 'flex' }}>
            <Tab value="bun" active={current === 'bun'} onClick={heandleChoice}>
                Булки
            </Tab>
            <Tab value="sauce" active={current === 'sauce'} onClick={heandleChoice}>
                Соусы
            </Tab>
            <Tab value="main" active={current === 'main'} onClick={heandleChoice}>
                Начинки
            </Tab>
        </div>
    )
}

ChoiceIngredients.propTypes = {
    choice: PropTypes.func.isRequired,
}

export default ChoiceIngredients