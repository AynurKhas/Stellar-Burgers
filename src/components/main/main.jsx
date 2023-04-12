import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import { dataItemForPropTypes } from "../utils/constants";
import s from './main.module.css'
import PropTypes from "prop-types";

import { DataBurger, DataContext } from "../../services/productsContext";
import { useState } from "react";

const Main = ({ data }) => {

    const burger = useState({
        ingredients: [],
        orderNumber: ''
    });

    return (
        <main className={s.main}>
            <DataContext.Provider value={data}>
                <DataBurger.Provider value={burger} >
                    <BurgerIngredients />
                    <BurgerConstructor />
                </DataBurger.Provider>
            </DataContext.Provider>
        </main>
    )

}

Main.propTypes = {
    data: PropTypes.arrayOf(dataItemForPropTypes).isRequired
}

export default Main