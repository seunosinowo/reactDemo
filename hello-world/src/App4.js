import logo from './logo.svg';
import './App.css';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import NameKey from './components/NameKey';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyles.css'
import Styles from './components/appStyles.module.css'
import Form from './components/Form';
import Lifecycle_A from './components/Lifecycle_A';
import Lifecycle_B from './components/Lifecycle_B';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

function App() {
  return (
    <div className='App'>
        <Form />
        <br/>

        <Lifecycle_A />
        <br/>
        <FragmentDemo />
        <Table />
    </div>
  );
}

export default App;
