// This file for STATE
import React, {Component} from 'react'

//DEFINE CLASS
class Message extends Component{

    constructor() {
        super() //because we extend class component class and a call has to be made to base class constructor   
        this.state = { //state object
            message: 'Welcom Visitor' 
        } 
    }

    changeMessage() {
        this.setState({
            message: 'Thankyou for subscribing'
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }
}

export default Message