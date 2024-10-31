import React from 'react'
import useCounter from '../hooks/useCounter'

function CounterTwo() {
    const [count, increment, decrement, reset] = useCounter(0)

  return (
    <div>
        <h2>Count - {count} </h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrementt</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo