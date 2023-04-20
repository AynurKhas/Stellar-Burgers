import { useCallback, useState } from "react";
import { useDispatch } from 'react-redux'
import { DELETE_DATA_ON_CLOSE } from "../services/actions/burger";


export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  // `useCallback` нужен для того, чтобы зафиксировать ссылку на функцию. Таким образом уменьшится кол-во перерисовок компонента, куда будет передана эта функция
  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    dispatch({
      type: DELETE_DATA_ON_CLOSE
    })
  }, []);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};