import React, { Component } from 'react'

class Mounting extends Component {
    //STEP-1
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Sneha'
      }
      console.log('Mounting Constructor')
    }

    //STEP-2
    static getDerivedStateFromProps(props, state) {
      console.log('Mounting getDerivedStateFromProps')
      return null
    }

    //STEP-4
    componentDidMount() {
      console.log('Mouting componentDidMount')
    }
    
    //STEP-3
    render() {
      console.log('Mounting render')
      return (
        <div>
          Mouting Constructor 
        </div>
      )
    }
}

export default Mounting
