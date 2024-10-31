import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCenter extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <h2 onMouseOver={this.incrementCount}>
        Hoverd {count} times
      </h2>
    )
  }
}

export default UpdatedComponent(HoverCenter) 
