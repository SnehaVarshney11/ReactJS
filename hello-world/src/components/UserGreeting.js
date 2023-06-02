// FILE FOR Conditional Rendering
import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
    // if isLoggedIn- false then Welcome Guest 
    // if isLoggedIn- true then Welcome Here 

    
    render() {

        //Short circuit operator
        return this.state.isLoggedIn && <div>Welcome Vishwas</div> 

        // Ternary conditional operator Approach
        /*return (
            this.state.isLoggedIn ?
            <div>Welcome If</div> :
            <div>Welcome Else</div>
        ) */

        //Element Variable Approach
        /*let message
        if(this.state.isLoggedIn) {
            message = <div>Welcome If</div>
        }else {
            message = <div>Welcome Else</div>
        }

        return <div>{message}</div> */

        // If-Else Approach
        /*if(this.state.isLoggedIn) {
            return <div> Welcome If </div>
        } else {
            return <div> Welcome Else </div>
        }*/

         
      /*return (
        <div>
            <div>Welcome Here</div>
            <div>Welcome Guest</div>
        </div>
      )*/
    }
}

export default UserGreeting
