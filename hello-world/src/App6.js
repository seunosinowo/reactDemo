import logo from './logo.svg';
import './App.css';
import ParentComp from './components/ParentComp';
import MemoComp from './components/MemoComp';
import RefsDemo from './components/RefsDemo';
import FRParentInput from './components/FRParentInput';
import Portal_Demo from './components/Portal_Demo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCenter from './components/HoverCenter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter1 from './components/Counter1';



function App() {
  return (
    <div className='App'>
        {/* <ClickCounter/>
        <HoverCenter/>

        <ClickCounterTwo/>
        <HoverCounterTwo/>
        
        
        <User render = {(isLoggedIn) => isLoggedIn ? "Seun Osinowo" : "Guest"} /> */}

        <Counter1 render = {(count, incrementCount) => (
          <ClickCounterTwo count = {count} incrementCount = {incrementCount} />
        )} />

        <Counter1 render = {(count, incrementCount) => (
          <ClickCounterTwo count = {count} incrementCount = {incrementCount} />
        )} />

    </div>
  );
}

export default App;
