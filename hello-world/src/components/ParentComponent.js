import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        // alert('Hello' + this.state.parentName)
        alert(`Hello ${this.state.parentName} from ${childName}`) // `${}` It's a feature of ES6 not react
    }
    
    render() {
      return (
        <div>
            {/* Passing a greetParent Method as prop greetHandler  */}
            <ChildComponent greetHandler={this.greetParent} /> 
        </div>
      )
    }
}

export default ParentComponent
