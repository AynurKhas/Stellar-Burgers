import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import sb from "../burgerConstructor/BurgerConstructor.module.css";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { GET_DELETE_INGREDIENT, GET_MOVE_INGREDIENT } from "../../services/actions/burgerConstructor";
import { bun, dataItemForPropTypes } from "../../utils/constants";
import PropTypes from "prop-types";
import { useRef } from "react";


export const BurgerItem = ({ item, index, moveCard }) => {
    const ref = useRef(null);
    const { burger } = useSelector(store => store.burgerConstructor)
    const id = item.uuid;
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
        item: { id, index },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    const [{ isHover }, dropIngredient] = useDrop({
        accept: 'noBunIngredient',
        collect: monitor => ({
            isHover: monitor.getHandlerId() /* monitor.isOver() */,
        }),
        drop(itemId) {
            const ingredientBun = burger.ingredients.find(el => el.type === bun);
            const dragItem = burger.ingredients.find(el => el.uuid === itemId.id);
            const ingredientsArrayNoDragItem = burger.ingredients.filter(el => el.uuid !== itemId.id);
            const ingredientsArraynoBun = ingredientsArrayNoDragItem.filter(el => el.type !== bun);
            ingredientsArraynoBun.splice(index, 0, dragItem);
            dispatch({
                type: GET_MOVE_INGREDIENT,
                payload: burger.ingredients.find(el => el.type === bun) ? [...ingredientsArraynoBun, ingredientBun] : [...ingredientsArraynoBun]
            })
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    const opacity = isDrag ? 0 : 1;
    drag(dropIngredient(ref));

    return (
        <li ref={ref} className={sb["burgerConstructor__container-items"]} style={{ opacity }} data-handler-id={isHover} >
            <span id={item.uuid}>
                <DragIcon type="primary" />
            </span>
            <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image_mobile}
                handleClose={(e) => handleDeleteIngredient(e, id)}
            />
            {/* <div className={sb["burgerConstructor__item"]}>
            </div> */}
        </li>
    )
}

BurgerItem.propTypes = {
    item: dataItemForPropTypes.isRequired,
    index: PropTypes.number.isRequired,
    moveCard: PropTypes.func.isRequired
}
