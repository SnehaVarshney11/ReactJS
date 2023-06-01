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

1. Stateless Functional Component - Like as JS Function, return HTML which describes the UI. 
```
function Welcome(props) {
    return <h1>Welcome, {props.name}</h1>;
}
```

2. Stateful Class Component - Like regular ES6 classes that extend component class from react library. Must contain render method which return HTML.
```
class Welcome extends React.Component{
    render(){
        return <h1>Welcome, {this.props.name}</h1>;
    }
}
```

