import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import s from './main.module.css'
import { useSelector } from 'react-redux'

const Main = () => {   

    return (
        <main className={s.main}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    )

}

export default Main