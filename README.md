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