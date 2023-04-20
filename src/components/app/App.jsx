import React, { useState } from 'react';
import AppHeader from '../appHeader/AppHeader';
import Main from '../main/main';
import s from './App.module.css';
import { api } from '../../utils/Api';
import { DataBurger, DataContext } from "../../services/productsContext";
import { useSelector, useDispatch } from 'react-redux'
import { getIngredients } from '../../services/actions/burger';

const App = () => {
  /* const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    data: []
  }); */

  const burger = useState({
    ingredients: [],
    orderNumber: ''
  });

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getIngredients());
    /* setState({ ...state, hasError: false, isLoading: true });
    api.getData()
      .then(data => setState({ ...state, data: data.data, isLoading: false }))
      .catch(() => {
        setState({ ...state, hasError: true, isLoading: false })
      }); */
  }, [dispatch]);

  // const { data, isLoading, hasError } = state;
  const { data, isLoading, hasError } = useSelector(store => store.burger);

  return (
    <div className={s.app}>

      {isLoading && 'Загрузка...'}
      {hasError && 'Произошла ошибка'}
      {!isLoading &&
        !hasError &&
        data.length &&
        <>
          <AppHeader />
          <DataContext.Provider value={data}>
            <DataBurger.Provider value={burger} >
              <Main />
            </DataBurger.Provider>
          </DataContext.Provider>
        </>
      }
    </div>
  );
}

export default App;
