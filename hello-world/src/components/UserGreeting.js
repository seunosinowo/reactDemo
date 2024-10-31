import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }

    //1.  Element variables   --
    // render() {
    //   let message
    //   if(this.state.isLoggedIn){
    //     message = <div>Welcome Seun</div>
    //   } else {
    //     message = <div>Welcome Guest</div>
    //   }
    //   return <div>{message}</div>
    // }
  
  //2. If/else     --
  // render() {
  //   if(this.state.isLoggedIn){
  //     return <div>Welcome Seun</div>
  //   } else {
  //     return <div>Welcome Guest</div>
  //   }
  // }


 //3. Ternary Condition   --
  // render() {
  //   return(
  //     this.state.isLoggedIn ? (
  //       <div>Welcome Seun</div>
  //     ) : (
  //       <div>Welcome Guest</div>
  //     )
  //   )
  // }

  // 4.	Short circuit operator
  render() {
    return(this.state.isLoggedIn) && <div>Welcome Seun</div>
  }

}

export default UserGreeting