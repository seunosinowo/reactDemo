import React, { Component } from 'react'
import Lifecycle_B from './Lifecycle_B'

class Lifecycle_A extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Seun'
    }

    console.log('Lifecycle_A.js Constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle_A getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('Lifecycle_A componentDidMount')
  }
  
  shouldComponentUpdate() {
    console.log('Lifecycle_A shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Lifecycle_A getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('Lifecycle_A componentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'codeevolution'
    })
  }

  render() {
      console.log('Lifecycle_A render')
      return (
        <div>
            <div>Lifecycle_A</div>
            <button onClick = {this.changeState}>Change state</button>
            <Lifecycle_B/>
        </div>
      )
  }
}

export default Lifecycle_A