import React from 'react'
import ReactDemo from 'react-dom'

function Portal_Demo() {
  return ReactDemo.createPortal (
    <h1>
      <h1>Portal_Demo</h1>
    </h1>,
    document.getElementById('portal-root')
  )
}

export default Portal_Demo
