# All about ReactJS

‼ <b>What is React?</b>  <br>
* It is an open source JS library for building user interfaces. It is focus on doing one thing. Not focus on other like routing or http request only focus to build UI. <br>
* Created and Maintained by Facebook. <br>
* It has Component Based Architecture. (like header, footer, sidenav etc...) <br>
* Reusable Code  <br>
* Declarative -> Tell only what you want and react will build the actual UI <br>
* It'll fit everywhere whether it is portion of any page, complete page oe entire app itself. <br>

‼ <b>Create React Application - </b>  <br>
1. Using npx <br>
run - npx create-react-app app-name <br>
cd app-name <br> npm run start <br>
2. Using npm <br>
run - npm install create-react-app -g <br>
run - create-react-app<app-name> <br>

‼ <b>Components -</b>  <br>
<img src="/Assests/Component.png" alt="Component"> <br>
* They are reusable. <br>
* Component code is placed on JavaScript file. E.g.- AppComponent is placed in App.js <br>
* There are 2 types of component -

1. Stateless Functional Component - Like as JS Function, return HTML (JSX) which describes the UI. Need to import only one component i.e. React
```
function Welcome(props) {
    return <h1>Welcome, {props.name}</h1>;
}
```

2. Stateful Class Component - Like regular ES6 classes that extend component class from react library. Must contain render method which return HTML. Need to import two components i.e. React and component class from react. <br>
<b>create class and class should be extend component and class has to implement render function which will return null or some HTML. </b>
```
class Welcome extends React.Component{
    render(){
        return <h1>Welcome, {this.props.name}</h1>;
    }
}
```

‼ <b>Difference between both components -</b> 
<img src="/Assests/DiffBetweenComponents.png" alt="Both Components"> <br>
Note:- Functional comp isn't stateless. 

‼ <b>JSX -</b> 
1. JavaScript XML is a extension to JS lang syntax. 
2. Write XML-like code for XML and Components.
3. JSX tags have a tag name, attributes and children. 
4. We can write react code without JSX but JSX makes react code simpler and elegant. 

‼ <b>JSX Differences -</b>
1. Class - className (replaced)
2. for - htmlFor
3. camelcase prop naming convention :- * onclick - onClick, tabindex - tabIndex

‼ <b>Props -</b> 
Props is just an object that contains the attributes and their values which have been passed through parent component. They are immutable. 

‼ <b>State -</b>
The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

‼ <b>Props VS State -</b>
<img src="/Assests/PropVsState.png" alt="Prop Vs State"> <br>

‼ <b>setState -</b>
1. Always make use of setState and never modify the state directly.
2. Code has to be executed after the state has been updated. Place that code in the call back function which is second argument to setState method.
3. When you have to update state based on the prev state value, pass in a func as an argument instead of regular object. 

‼ <b>Destructuring the props and state -</b>
The destructuring is an ES6 feature that makes it possible to unpack values from arrays or properties from objects into distinct variables. In React, destructuring props and states improve code readability.

‼ <b>Event Handler -</b> <br>
* Just like HTML DOM events, React can perform actions based on user events. React has the same events as HTML: click, change, mouseover etc.
* They are function not a function call so don't need to write paranthesis. 

‼ <b>Event Binding -</b> <br>
1st Method - Binding in render (Use Bind)  <br>
2nd Method - Arrow function in render <br>
3rd Method - Binding in class constructor (Deals with binding the event handler in constructor as opposed to binding in rendor method.) <br>
4th Method - Class property as arrow function.  <br>

‼ <b>Conditional Rendering (UserGreeting.js file)-</b> <br> 
1. When building react application, often need to show or hide some html based on a certain condition, use Conditional Rendering. Conditional Rendering works the same way conditions work in JS. 
2. There are 4 approaches - <br>
a. if/else <br> b. Element variable <br> c. Ternary conditional operator <br> d. Short circuit operator -> Use when we want to print something or nothing

‼ <b>List Rendering-</b> <br> 
Transforming arrays into lists of elements. When you're working with React, you will often times need to render lists of items. With the map() method, you can create new results from your current lists or even showcase all the items in your lists.

‼ <b>Lists And Keys-</b> 
1. A key is a special string attribute you need to include when creating a list of element.
2. Keys give the element a special identity.
3. Helps react identify which items have changed, are added, or are removed.
<img src="/Assests/ListWithoutKey.png" alt="List Without Key"> <br>
<img src="/Assests/ListWithKey.png" alt="List With Key"> <br>

‼ <b>When to use Index As Key-</b> 
1. The items in your list don't have unique id. 
2. The list is a static list and will not change.
3. The list never be reordered or filtered. <br>

<b>Issue:-</b>
<img src="/Assests/IndexAsKey.png" alt="Problem in Index As Key"> <br>

‼ <b>Styling React Component -</b> 
1. CSS stylesheet
2. Inline styling -> They aren't specified as a string instead they're specified with object whose key is camel case version of the styling and the value is usually a string. 
3. CSS Module -> Available version 2 or higher. File name must be suffix <b>.module.css</b>. Adv - Classes are locally scoped by-default. 
4. CSS in JS libraries

‼ <b>Basics of Form Hanling -</b> <br>
<b>Controlled components -</b>
Form elements which are controlled by react, called controlled components. 
```
E.g. 
<input type='text' value={this.state.email} onChange={this.changeEmailHandler} >
```
In react, value of the input field is set to the state property and we use setState method in onChange to update the state.
```
this.state = {
    email: ''
}
this.changeEmailHandler = (event) => {
    this.setState({email:event.target.value})
}
```

‼ <b>Life Cycle Methods in a Class Component -</b> 
1. Mounting -> When an instance of a component is being created and inserted into DOM. There are 4 methods: constructor, static getDerivedStateFromProps, render and componentDidMount <br>
A) constructor(props) - <br>
🎗 A special function that will get call whenever a new component is created. <br>
🎗 Initializing state, Binding the event handler. <br>
🎗 Don't cause side effect. Ex: HTTP request <br>
🎗 super(props), Directly override this.state <br> <br>
B) static getDerivedStateFromProps(props, state) - <br>
🎗 Rarely Used Method. <br>
🎗 When the state of the component depends on the changes in props over time. <br>
🎗 Set the state. <br>
🎗 It's a static method and not use this keyword. Simply return object that represent new state. <br>
🎗 Don't cause side effect. Ex: HTTP request <br><br>
C) render() - <br>
🎗 Only required method. <br>
🎗 Read props & state and return JSX. <br>
🎗 Don't change the state or interact with DOM and make ajax calls. <br>
🎗 Children components lifecycle methods are also executed. <br><br>
D) componentDidMount() - <br>
🎗 Will be called only once in whole lifecycle and invoked immediately after component and it's all children components have been rendered to DOM. <br>
🎗 Cause side effect. Ex: Interact with DOM or perform any ajax calls to load data. <br> 

2. Updating -> When a component is being re-rendered as a result of changes to either its props or state. There are 5 methods: static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate <br>
A) static getDerivedStateFromProps(props, state) - <br>
🎗 Method is called everytime a component is re-renderd. <br>
🎗 Set the state. <br>
🎗 Don't cause side effects. Ex: HTTP requests.  <br><br>
B) shouldComponentUpdate(nextProps, nextState) - <br>
🎗 Rarely Used Method. <br>
🎗 Dictates if the component should re-render or not <br>
🎗 Performance optimization. <br>
🎗 Don't cause side effects. Ex: HTTP requests, Calling the setState method. <br><br>
C) render() -  <br>
🎗 Only required method. <br>
🎗 Read props & state and return JSX. <br>
🎗 Don't change the state or interact with DOM and make ajax calls. <br><br>
D) getSnapshotBeforeUpdate(prevProps, prevState) - <br>
🎗 Rarely used method. <br>
🎗 Called right before the changes from the virtual DOM are to br reflected in DOM. <br>
🎗 Capture some info. from DOM. <br>
🎗 Method will either return null or return a value. Returned a value will be passed as the third parameter to next method. <br><br>
E) componentDidUpdate(prevProps, prevState, snapshot) - <br>
🎗 Called after render is finished in re-render cycles. <br>
🎗 Cause side effect. <br><br>

3. Unmounting -> When a component is being removed from DOM. There is 1 method: componentWillUnmount <br>
A) componentWillUnmount - <br>
🎗 Method is invoked immediately before a component is unmounted and destroyed. <br>
🎗 Cancelling any network requests, removing event handlers, cancelling any subscription and also invalidating timers. <br>
🎗 Don't call the setState method. <br><br>

4. Error Handling -> When there is an error during rendering, in a lifecycle method, or in a constructor of any child component. There are 2 methods: static getDerivedStateFromError and componentDidCatch <br> 
A) static getDerivedStateFromError(error) <br>
B) componentDidCatch(error, info) <br>
🎗 These methods are called when there is an error either during rendering, in a lifecycle method or in a constructor of any child component. <br><br>

‼ <b>Fragments -</b> <br>
🎗 Lets you group a list of children elements without adding extra nodes to DOM.  We can replace enclosing div tag with react fragment and that will prevent the extra node from being added to DOM.<br>
🎗 It can accept key attribute when rendering list of items. <br><br>

‼ <b>Pure Components -</b> <br>
🎗 A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React. PureComponent class are treated as pure components.<br>
🎗 It implements shouldComponentUpdate with a shallow props and state comparison.   <br> 
🎗 SC  of prevState with curState <br> 
🎗 SC of prevProp with curProp <br>
🎗 We can create a component by extending PureComponent class. <br>
🎗 If there is no difference, the component is not re-render. <br>
🎗 Never mutate the state. Always return a new object that reflects the new state. <br>
🎗 It will work only class based component. <br>

‼ <b>Shallow Comparison (SC)-</b> <br>
🎗 Primitive type:- a (sc) b return true if a and b have same value and same type. EX:- String 'sneha' (SC) String 'sneha' return true; <br>
🎗 Complex type:- a (sc) b return true if a and b references the same object.
```
Ex:- 
var a = [1,2,3];
var b = [1,2,3];
var c = a;
var ab_eq = (a===b) //false
var ac_eq = (a===c) //true
```

‼ <b>Memo -</b> <br>
🎗 It is like as pure component. The difference is that pure comp works on class component and memo works on functional component. <br> 

‼ <b>Refs -</b> <br> 
🎗 Refs is the shorthand used for references in React. It is similar to keys in React. It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements. It provides a way to access React DOM nodes or React elements and how to interact with it. <br>
🎗 Can't use in functional component. <br>

‼ <b>Forwarding Refs -</b> <br> 
🎗 It is a technique for automatically passing a ref through a component to one of its children. 
🎗 It's very useful when building reusable component libraries. 
🎗 forwardRef is a function used to pass the ref to a child component. 

‼ <b>Portals -</b> <br> 
🎗 It provides a way o render children into a DOM node that exists outside the DOM hierarchy of parent component. <br>
🎗 React Portals are an advanced concept that allows developers to render their elements outside the React hierarchy tree without comprising the parent-child relationship between components. Usually, typical React components are located within the DOM. <br>
🎗 It is useful when you want to have a parent-child relationship in your components while you want to render a child component outside of the parent. <br> 

‼ <b>Error boundary -</b> <br> 
🎗 A class component that implements either one or both of the lifecycle methods getDerivedSatateFromError or componentDidCatch becomes an error boundary. <br>
🎗 The static method getDerivedSatateFromError method is used to render a fallback UI after an error is thrown and componentDidCatch is used to log error information.<br>

‼ <b>Higher Order Component -</b> <br> 
🎗 It is a advance technique for reusing component logic. EX: In clickCounter and hoverCounter file, we use the same code. So why we are writing the same code again. In this condition we use HOC. <br>
🎗 Higher-order component is a function that takes a component and returns a new component. <br>
🎗 A component transforms props into UI, a higher-order component transforms a component into another component. <br>
🎗 <b>Syntax: </b> <br>
const NewComponent = higherOrderComponent(originalComponent)  