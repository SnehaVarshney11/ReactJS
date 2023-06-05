//FILE FOR Form Hanling
import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic: 'react'
      }
    }

    handleUsername = (event) => {
        this.setState({
          username: event.target.value
        })
    }

    handleComment = event => {
      this.setState({
        comments: event.target.value
      })
    }

    handleTopic = event => {
      this.setState({
        topic: event.target.value
      })
    }

    handleSubmit = event => {
      alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
      // After removing alert everything is visible 
      event.preventDefault()
    }
    
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUsername}/>
        </div>
        <div>
          <label>Comments</label>
          <textarea value={this.state.comments} onChange={this.handleComment}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopic}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="html">HTML</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
