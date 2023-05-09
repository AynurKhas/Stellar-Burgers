import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import s from './main.module.css'

const Main = () => {

    return (
        <main className={s.main}>
            <DndProvider backend={HTML5Backend} >
                <BurgerIngredients />
                <BurgerConstructor />
            </DndProvider >
        </main>
    )
}

export default Main