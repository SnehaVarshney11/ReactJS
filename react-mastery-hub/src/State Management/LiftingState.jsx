import React, { useState } from "react";

// NameInput component for entering the name
const NameInput = ({ name, onNameChange }) => {
  return (
    <div>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />
    </div>
  );
};

// AgeInput component for entering the age
const AgeInput = ({ age, onAgeChange }) => {
  return (
    <div>
      <label>Age: </label>
      <input
        type="number"
        value={age}
        onChange={(e) => onAgeChange(e.target.value)}
      />
    </div>
  );
};

// The parent component where the state is lifted up
const UserForm = () => {
  const [name, setName] = useState(""); // State for name --- Lifting the name state
  const [age, setAge] = useState(""); // State for age --- Lifting the age state

  return (
    <div>
      <h1>User Form</h1>

      {/* Pass the name state and setName function to NameInput */}
      <NameInput name={name} onNameChange={setName} />

      {/* Pass the age state and setAge function to AgeInput */}
      <AgeInput age={age} onAgeChange={setAge} />

      {/* Display the name and age */}
      <h2>
        Hello, {name || "Anonymous"}! You are {age || "unknown"} years old.
      </h2>
    </div>
  );
};

export default UserForm;
