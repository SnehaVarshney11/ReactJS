import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import React from 'react';

function App() {
  //This is JSX version to write react code 
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman"> 
        <button>Action</button>
      </Greet>
      <Greet name="Alice" heroName="Wonder Women"/>

      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Alice" heroName="Wonder Women"/>
      <Hello />
    </div>
  ); 

  
  // This is not JSX version to write react code 
  //return React.createElement('div', {id:'hello'}, React.createElement('h1',null,'Hello')) //String, optional prop, children
}

export default App;
