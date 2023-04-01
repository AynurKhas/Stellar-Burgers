import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import s from './main.module.css'
import PropTypes from "prop-types";

const Main = ({ data }) => {
    return (
        <main className={s.main}>
            <BurgerIngredients data={data} />
            <BurgerConstructor data={data} />
        </main>
    )
    
}

Main.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Main