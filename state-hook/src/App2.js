import React from 'react' ;
import './App.css';

import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';



function App() {
  return (
    <div className="App">
      
      <MouseContainer />
      {/* <IntervalCountCounter /> */}

      <IntervalHookCounter />
      <DataFetching />
    </div>
  );
}

export default App;
