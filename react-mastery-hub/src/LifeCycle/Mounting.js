import React, { Component } from "react";

class Timer extends Component {
  // STEP-1: Constructor
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("Timer Constructor");
  }

  // STEP-2: getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("Timer getDerivedStateFromProps");
    return null; // We're not changing the state based on props here
  }

  // STEP-4: componentDidMount
  componentDidMount() {
    console.log("Timer componentDidMount");
    // Setting up an interval to simulate a real-life scenario
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.count >= 10) {
          clearInterval(this.interval); // Stop the timer when count reaches 10
          console.log("Timer stopped");
        }
        return { count: prevState.count + 1 };
      });
    }, 1000);
  }

  // Cleanup the interval when the component is unmounted
  componentWillUnmount() {
    console.log("Timer componentWillUnmount");
    clearInterval(this.interval);
  }

  // STEP-3: render
  render() {
    console.log("Timer render");
    return (
      <div>
        <h1>Timer: {this.state.count}</h1>
      </div>
    );
  }
}

export default Timer;
