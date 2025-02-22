import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
    
  render() {
    const {count, incrementCount} = this.props
    return <button onClick={this.incrementCount}>Clicked {count} times</button>
  }
}

export default UpdatedComponent(ClickCounter)
