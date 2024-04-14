import React from 'react';
import ReactDOM from 'react-dom/client';
import ParentComponent from './Hooks/Context/Pcomponent';
import CounterRef from './Hooks/Ref/counter';
import Counter from './Hooks/State/useState/counter';
import FavColor from './Hooks/example';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter/>
    <ParentComponent />
    <FavColor /> <br />
    <CounterRef /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
