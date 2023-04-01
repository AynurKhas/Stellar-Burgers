import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";


export function Choice({ choice }) {
    const [current, setCurrent] = React.useState();

    React.useEffect(() => {   
        choice(current);
    }, [current])


    return (
        <div style={{ display: 'flex' }}>
            <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}

Choice.propTypes = {
    choice: PropTypes.func.isRequired,
}