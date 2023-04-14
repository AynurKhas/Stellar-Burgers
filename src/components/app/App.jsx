import React, { useState } from 'react';
import AppHeader from '../appHeader/AppHeader';
import Main from '../main/main';
import s from './App.module.css';
import { api } from '../../utils/Api';
import { DataBurger, DataContext } from "../../services/productsContext";

const App = () => {
  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    data: []
  });

  
  const burger = useState({
    ingredients: [],
    orderNumber: ''
});

  React.useEffect(() => {
    setState({ ...state, hasError: false, isLoading: true });
    api.getData()
      .then(data => setState({ ...state, data: data.data, isLoading: false }))
      .catch(() => {
        setState({ ...state, hasError: true, isLoading: false })
      });
  }, []);

  const { data, isLoading, hasError } = state;

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
