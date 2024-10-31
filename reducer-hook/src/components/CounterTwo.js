import React, {useReducer} from 'react'

const intialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {firstCounter: state.firstCounter + action.value}
    case 'decrement':
      return {firstCounter: state.firstCounter - action.value}

    case 'increment2':
      return {secondCounter: state.secondCounter + action.value}
    case 'decrement2':
      return {secondCounter: state.secondCounter - action.value}

    case 'reset':
      return intialState
    default:
      return state

  }
}

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, intialState)

  return (
    <div>
      <div>firstCounter - {count.firstCounter} </div>
      <div>secondCounter - {count.secondCounter} </div>

      <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>

      <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
      <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>

      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

      <div>
        <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment Counter 2</button>
        <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement Counter 2</button>
      </div>

    </div>
  )
}

export default CounterTwo
