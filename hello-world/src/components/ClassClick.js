import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log("Class Button Clicked")
    }

    render() {
        return (
        <button onClick={this.clickHandler}>ClassClick</button>
        )
    }
}

export default ClassClick