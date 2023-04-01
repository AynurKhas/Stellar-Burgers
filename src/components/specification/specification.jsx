import { useState } from "react";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import s from './Specification.module.css';
import PropTypes from "prop-types";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const Specification = ({ item }) => {
    const [showModal, setShowModal] = useState(false);

const handleCloseModalEsc = () => {
        setShowModal(false);
    }

    const modal = (
        <ModalOverlay setShowModal={setShowModal} onClosEsc={handleCloseModalEsc}>
            <IngredientDetails product={item} setShowModal={setShowModal} />
        </ ModalOverlay>
    );

    return (
        <li className={s.ingredients__items} style={{ overflow: 'hidden' }} onClick={() => setShowModal(true)}>
            <article className={s.specification} >
                <img src={`${item.image}`} alt={`${item.name}`} className={s.specification__img} />
                <ul className={s.specification__container}>
                    <li className={s["specification__container-item"]}>
                        <p className={`${s["specification__container-item-proteins"]} text text_type_digits-default`}>{item.proteins}</p>
                        <CurrencyIcon type="primary" />
                    </li>
                    <li className={s["specification__container-item"]}>
                        <p className={`$["specification__container-item-name"] text text_type_main-default`}>{item.name}</p>
                    </li>
                </ul>
                <Counter count={1} size="default" extraClass="m-1" />
                {/* {{state.count && <Counter count={1} size="default" extraClass="m-1" />}} */}
            </article>
            {showModal && modal}
        </li>
    )
}

Specification.propTypes = {
    item: PropTypes.shape({
        proteins: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}.isRequired;

export default Specification