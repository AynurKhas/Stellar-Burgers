import AppHeader from '../appHeader/AppHeader';
import Main from '../main/main';
import s from './App.module.css';

const App = () => {
  return (
    <div className={s.app}>
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
