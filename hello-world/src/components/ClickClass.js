// Event Handling
import React, { Component } from 'react'

class ClickClass extends Component {
    clickHandler() {
        console.log('Click the button')
    }
    render() {
      return (
        <div>
          <button onClick={this.clickHandler}>Click Me</button>
        </div>
      )
    }
}

export default ClickClass
