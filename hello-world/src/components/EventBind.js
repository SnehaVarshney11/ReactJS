//Binding Event Handlers
import React, { Component } from 'react'

class EventBind extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        // 3rd Method 
        // this.clickHandler = this.clickHandler.bind(this)
    }

    /*clickHandler() {
        this.setState({
            message: 'GoodBye'
        }) 
    }*/

    // 4th method 
    clickHandler = () => {
      this.setState({
        message: 'GoodBye'
      })
    }

    render() {
      return (
        <div>
            <h1>{this.state.message}</h1>
            {/* 1st Method     */}
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
          {/* 2nd Method  */}
          {/* <button onClick={() => this.clickHandler()}>Click</button> */}
          <button onClick={this.clickHandler}>Click</button>
        </div>
      )
    }
}

export default EventBind
