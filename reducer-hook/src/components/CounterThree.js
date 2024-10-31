import React, {useReducer} from 'react'
import CounterTwo from './CounterTwo'

const intialState = 0
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return intialState
    default:
      return state

  }
}

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, intialState)
  const[count2, dispatch2] = useReducer(reducer, intialState)

  return (
    <div>
      <div>Count - {count} </div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>

      <div>
        <div>Count Two - {CounterTwo} </div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>

    </div>
  )
}

export default CounterThree
