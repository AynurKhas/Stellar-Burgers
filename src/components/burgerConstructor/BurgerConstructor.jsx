import { useContext, useMemo, useState } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import sb from './BurgerConstructor.module.css'
import s from "../scroll/scroll.module.css";
// import PropTypes from "prop-types";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../modal/Modal";
import { bun, dataItemForPropTypes } from "../utils/constants";
import { DataBurger } from "../../services/productsContext";
import Total from "../total/Total";

const BurgerConstructor = () => {
    const [burger] = useContext(DataBurger);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModalEsc = () => {
        setShowModal(false);
    }

    const bunInBurger = useMemo(() => burger.ingredients.find(item => item.type === bun), [burger.ingredients]);


    const arrNoBun = useMemo(() => burger.ingredients.filter(item => (
        item.type !== bun)), [burger.ingredients]);
    
    const message = (
        <div className={sb.massege}>
            <p className="text text_type_main-medium">Добавьте ингредиенты, нажав правую кнопку мыши!</p>
        </div>
    )

    const modal = (
        <Modal setShowModal={setShowModal} onClosEsc={handleCloseModalEsc}>
            <OrderDetails setShowModal={setShowModal} />
        </ Modal>
    );

    return (
        <section className={sb.burgerConstructor}>
            {(burger.ingredients.length === 0)
            ? message
            : <> <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: 'min-content', marginTop: '100px', width: '100%' }}>
                <span className={sb.burgerConstructor__span}>
                    {bunInBurger && <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bunInBurger.name} (верх)`}
                        price={bunInBurger.price}
                        thumbnail={bunInBurger.image_mobile} />}
                </span>
                <ul className={`${sb.burgerConstructor__container} ${s.scroll}`}>
                    {arrNoBun && arrNoBun.map((item, index) => (
                        <li className={sb["burgerConstructor__container-items"]} key={index}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={item.name}
                                price={item.price}
                                thumbnail={item.image_mobile} />
                        </li>
                    ))}
                </ul>
                <span className={sb.burgerConstructor__span}>
                    {bunInBurger && <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bunInBurger.name} (вниз)`}
                        price={bunInBurger.price}
                        thumbnail={bunInBurger.image_mobile} />}
                </span>
            </div>
            <Total setShowModal={setShowModal} />
            </>}
            {showModal && modal}
        </section>
    )
}

/* BurgerConstructor.propTypes = {
    burger: PropTypes.arrayOf(dataItemForPropTypes)
} */

export default BurgerConstructor