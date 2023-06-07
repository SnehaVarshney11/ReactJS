import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClickClass from './components/ClickClass';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css'; 
import styles from './appStyle.module.css' 
import Form from './components/Form';
import Mounting from './components/Mounting';
import Updating from './components/Updating';
import FragmentDemo from './components/FragmentDemo';


function App() {
  //This is JSX version to write react code 
  return (
    <div className="App">
     <FragmentDemo />
      {/* <Updating /> */}
      {/* <Mounting /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inline /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClickClass /> */}
      {/* <Counter />
      <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name="Clark" heroName="Superman"> 
        <button>Action</button>
      </Greet>
      <Greet name="Alice" heroName="Wonder Women"/> */}
      {/* <Welcome name="Bruce" heroName="Batman"/> */}
      {/* <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Alice" heroName="Wonder Women"/>
      <Hello /> */}
    </div>
  ); 

  
  // This is not JSX version to write react code 
  //return React.createElement('div', {id:'hello'}, React.createElement('h1',null,'Hello')) //String, optional prop, children
}

export default App;
