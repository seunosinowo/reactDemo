import React, { Component } from 'react'

class ClassCounter extends Component {
    //State variable
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    // Method
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count: {this.state.count} </button>
      </div>
    )
  }
}

export default ClassCounter
