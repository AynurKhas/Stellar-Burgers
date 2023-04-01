import React from 'react';
import AppHeader from '../appHeader/AppHeader';
import Main from '../main/main';
import { url } from '../utils/constants';
import './App.css';



const App = () => {
  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    data: []
  });

  React.useEffect(() => {
    const getFilms = () => {
      setState({ ...state, hasError: false, isLoading: true });
      fetch(url)
        .then(res => res.json())
        .then(data => setState({ ...state, data: data.data, isLoading: false }))
        .catch(err => {
          setState({ ...state, hasError: true, isLoading: false });
          console.log(`Ошибка: ${err.message}`);
        });
    };
    getFilms();
  }, []);

  const { data, isLoading, hasError } = state;

  return (
    <div className="App">

      {isLoading && 'Загрузка...'}
      {hasError && 'Произошла ошибка'}
      {!isLoading &&
        !hasError &&
        data.length &&
        <>
          <AppHeader />
          <Main data={data} />
        </>
      }
    </div>
  );
}

export default App;
