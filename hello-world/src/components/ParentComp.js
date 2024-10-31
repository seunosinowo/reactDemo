import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends PureComponent {
    //We should be able to change the state of the component

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Seun"
      }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Seun"
            })
        }, 2000);
    }

  render() {
    console.log("****Parent Component****")
    return (
      <div>
        
        Parent Component
        <MemoComp name = {this.state.name} />
        {/* <RegularComp name = {this.state.name} />
        <PureComp name = {this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp
