import React, {useState} from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([])

    const addButton = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1

        }])
    }

  return (
    
    <div>
        <button onClick={addButton}>Add a number</button>
        <ul>
            {items.map(items => (
                <li key = {items.key}>{items.value}</li>
            ))

            }
        </ul>
    </div>
  )
}

export default HookCounterFour