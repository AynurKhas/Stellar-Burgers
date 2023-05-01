import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import sb from "../burgerConstructor/BurgerConstructor.module.css";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { GET_DELETE_INGREDIENT, GET_MOVE_INGREDIENT } from "../../services/actions/burgerConstructor";
import { bun } from "../../utils/constants";


export const BurgerItem = ({ item, index }) => {
    const { burger } = useSelector(store => store.burgerConstructor)
    const id = item.index;
    const dispatch = useDispatch();

    const handleDeleteIngredient = (e, id) => {
        e.preventDefault();
        dispatch({
            type: GET_DELETE_INGREDIENT,
            payload: id
        })
    }

    const [{ isDrag }, drag] = useDrag({
        type: "noBunIngredient",
        item: { id },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });
    
    const [, dropIngredient] = useDrop({
        accept: 'noBunIngredient',
        drop(itemId) {
            const insgredientBun = burger.ingredients.find(el => el.type === bun);
            const prevItem = burger.ingredients.find(el => el.index === itemId.id);
            const ingredientsArray = burger.ingredients.filter(el => el.index !== itemId.id);
            const ingredientsArraynoBun = ingredientsArray.filter(el => el.type !== bun);
            ingredientsArraynoBun.splice(index, 0, prevItem);
            dispatch({
                type: GET_MOVE_INGREDIENT,
                payload: burger.ingredients.find(el => el.type === bun) ? [ ...ingredientsArraynoBun, insgredientBun] : [ ...ingredientsArraynoBun]
            })
        },
    })

    return (
        <li ref={dropIngredient} className={sb["burgerConstructor__container-items"]} >
            <span ref={drag} id={item.index}>
                <DragIcon type="primary" />
            </span>
            <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image_mobile}
                handleClose={(e) =>  handleDeleteIngredient( e, id)}
            />
        </li>
    )
}
