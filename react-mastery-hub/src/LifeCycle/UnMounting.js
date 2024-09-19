import React, { Component } from "react";

class TimerComponent extends Component {
  // Ist
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("TimerComponent Constructor");
  }

  // 3rd
  componentDidMount() {
    console.log("TimerComponent componentDidMount");
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000); // Increment count every 1 second
  }

  //4th
  componentWillUnmount() {
    console.log("TimerComponent componentWillUnmount");
    clearInterval(this.interval); // Clear interval when component unmounts
  }

  // 2nd
  render() {
    console.log("TimerComponent render");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default TimerComponent;

/*
App.js
const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Unmount Timer" : "Mount Timer"}
      </button>

      // Conditionally rendering TimerComponent 
      {showTimer && <TimerComponent />}
    </div>
  );
}; 
*/
