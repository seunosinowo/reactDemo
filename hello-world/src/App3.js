import logo from './logo.svg';
import './App.css';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import NameKey from './components/NameKey';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyles.css'
import Styles from './components/appStyles.module.css'

function App() {
  return (
    <div className='App'>
        <UserGreeting/>
        {/* <NameList/> */}
        <NameKey/>
        <br/>
        <Stylesheet primary = {true}/>
        <Inline/>
        <br/>
        <h1 className='error'>Error</h1>
        <h1 className={Styles.success}>Success</h1>
    </div>
  );
}

export default App;
