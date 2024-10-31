import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props);
      this.state = {
         message: "Hello"
      }

      this.clickHandler = this.clickHandler.bind(this)  
      {/** binding in class construtor */}

    }
    

    // clickHandler() {
    //     this.setState({
    //         message: "You're welcome"
    //     })
    // }

    
    // arrow function as a class property
    //class method has arrow functions
    clickHandler = () => {
        this.setState({
            message: "You're welcome"
        })
    }
    

  render() {
    return (
        <div>
            <div><h1>{this.state.message}</h1></div>
            {/* <button onClick={this.clickHandler.bind(this)}>Click Meeee</button> */}
            {/* binding in render */}

            {/* <button onClick={() => this.clickHandler()}>Click Meeee</button>   */}
            {/* It has performance implications in some scenarios */}
            {/* arrow function in render */}

            <button onClick={this.clickHandler}>Click Meeee</button>  
        </div>
    )
  }
}

export default EventBind