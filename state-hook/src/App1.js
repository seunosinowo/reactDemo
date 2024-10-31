import React from 'react' ;
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounter111 from './components/HookCounter111';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <br/>
      <HookCounter2 />
      <br/>
      <HookCounter3 />

      <HookCounterFour/>

      {/* <ClassCounterOne/> */}
      <br/>
      {/* <HookCounter111/> */}
      {/* <ClassMouse/> */}
      <HookMouse/>
    </div>
  );
}

export default App;
