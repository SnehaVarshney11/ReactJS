import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
      super(props)
      //FIRST STEP
      this.inputRef = React.createRef()
      // SECOND METHOD FOR CREATING REF
      //FIRST STEP
      this.cbRef = null
      //SECOND STEP
      this.setCbRef = (element) => {
        this.cbRef = element
      }
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)

        if(this.cbRef) {
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        {/* We want if page reload, the input feild should be focused */}
        {/* SECOND STEP -> attach ref on input field */}
        <input type="text" ref={this.inputRef}/>
        {/* Fetching the input value  */}
        <button onClick={this.clickHandler}>Click Me</button>
        <input type='text' ref={this.setCbRef}/>
      </div>
    )
  }
}

export default Refs