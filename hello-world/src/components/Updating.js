import React, { Component } from 'react'

class Updating extends Component {
    //STEP-1
    static getDerivedStateFromProps(props, state) {
        console.log('Updating getDerivedStateFromProps')
        return null
    }

    //STEP-2
    shouldComponentUpdate() {
        console.log('Updating shouldComponentUpdate')
        return true;
    }

    //STEP-4
    getSnapshotBeforeUpdate(prevProps, nextProps) {
        console.log('Updating getSnapshotBeforeUpdate')
        return null
    }

    //STEP-5
    componentDidUpdate() {
        console.log('Updating componentDidUpdate')
    }

    chnageState = () => {
        this.setState({
            name: 'Sneha'
        })
    }

    //STEP-3
    render() {
      return (
        <div>
          <div>Updating LifeCycle</div>
          <button onClick={this.chnageState}>Change State</button>
        </div>
      )
    }
}

export default Updating
