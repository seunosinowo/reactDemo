import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import HelloWithout from './components/HelloWithoutJSX';
import Props from './components/Props';
import Message from './components/Message';


function App() {
  return (
    <div className="App">
      <Greet name = "Bruce" heroName = "Batman"/>
      <p>This is a children Props</p>

      <Greet name = "Clark" heroName = "Superwoman"/>
      <button>Click Me</button>

      <Greet name = "Diana" heroName = "Wonder woman"/>
      
      <Hello/>
      <HelloWithout/>

      <Props name = 'David Faith' favorite = 'games'>
        <p>Hey who are you</p>    {/* children */}
        <button>Click Me</button>
      </Props>

      <Props name = "Faith">
          <button>HH</button>
      </Props>

      <Welcome name = "Emma" heroName = "David"/>

      <Message />

    </div>
  );
}

export default App;
