import React, { Component } from "react";

class Updating extends Component {
  // STEP-1: getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("UpdatingExample getDerivedStateFromProps");
    if (props.newNumber !== state.number) {
      return {
        number: props.newNumber, // update state based on props
      };
    }
    return null;
  }

  // STEP-2: shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.log("UpdatingExample shouldComponentUpdate");
    // Only update if the number is different
    return nextProps.newNumber !== this.props.newNumber;
  }

  // STEP-4: getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("UpdatingExample getSnapshotBeforeUpdate");
    // Capture any information from the DOM before the update (optional)
    return null;
  }

  // STEP-5: componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("UpdatingExample componentDidUpdate");
    // Reacts to the update once it's done
  }

  // STEP-3: render
  render() {
    console.log("UpdatingExample render");
    return (
      <div>
        <h1>Number: {this.state.number}</h1>
      </div>
    );
  }

  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      number: props.newNumber,
    };
    console.log("Constructor");
  }
}

export default Updating;

/**
 In App.js
 const App = () => {
  // Using useState to manage the state
  const [number, setNumber] = useState(1);

  // Function to increment the number
  const incrementNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div>
       //Passing the number as a prop to UpdatingExample 
      <Updating newNumber={number} />
      // Button to trigger increment 
      <button onClick={incrementNumber}>Increment Number</button>
    </div>
  );
};
 */
