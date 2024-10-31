import logo from './logo.svg';
import './App.css';
import ParentComp from './components/ParentComp';
import MemoComp from './components/MemoComp';
import RefsDemo from './components/RefsDemo';
import FRParentInput from './components/FRParentInput';
import Portal_Demo from './components/Portal_Demo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';



function App() {
  return (
    <div className='App'>
        <ParentComp />
        <MemoComp />

        <br/>
        <RefsDemo />

        <br/>
        <FRParentInput />
        <br/>

        <Portal_Demo />

        <br/>
        <ErrorBoundary>  
          <Hero heroName="Seun"/>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="David"/>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker"/>
        </ErrorBoundary>
    </div>
  );
}

export default App;
