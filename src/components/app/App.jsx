import React from 'react';
import AppHeader from '../appHeader/AppHeader';
import Main from '../main/main';
import './App.css';
import { api } from '../utils/Api';



const App = () => {
  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    data: []
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
