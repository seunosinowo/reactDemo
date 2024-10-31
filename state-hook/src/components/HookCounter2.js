import React, { useState } from 'react'

function HookCounter2() {
    const intialCount = 0
    const [count, setCount] = useState(intialCount)

    const incrementFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(prevCount => prevCount)
        }
    }

  return (
    <div>
        Count: {count} <br/>
        <button onClick={() => setCount(intialCount)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>

        <button onClick={incrementFive}>Increment5</button>
    </div>
  )
}

export default HookCounter2