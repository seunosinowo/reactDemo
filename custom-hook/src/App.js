import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      {/* <DocTitleOne />
      <DocTitleTwo /> */}

      <CounterOne />
      <br/>
      <UserForm />
    </div>
  );
}

export default App;
