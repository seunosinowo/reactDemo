import React, {useState, useEffect} from 'react'

function HookCounter111() {
const [count, setCount] = useState(0)
const [name, setName] = useState('')

useEffect(() => {
  console.log('UseEffect - Update Document Title')
    document.title = `You clicked ${count} times`
}, [count])

  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Count {count} times </button>
    </div>
  )
}

export default HookCounter111
