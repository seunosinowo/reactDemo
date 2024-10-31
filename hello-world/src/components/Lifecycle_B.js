import React, { Component } from 'react'

class Lifecycle_B extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Seun'
    }

    console.log('Lifecycle_B.js Constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle_B getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('Lifecycle_B componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('Lifecycle_B shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Lifecycle_B getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('Lifecycle_B componentDidUpdate')
  }
  

  render() {
      console.log('Lifecycle_B render')
      return <div>Lifecycle_B</div>
  }
}

export default Lifecycle_B