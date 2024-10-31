import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>

      {/* Passing from child to parent */}
    </div>
  )
}

export default ChildComponent;
