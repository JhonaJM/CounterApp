import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import  CounterApp  from "./CounterApp";
import './index.css';

const DivRoot=document.querySelector("#root");

ReactDOM.render(<CounterApp numero={10}/>,DivRoot);
console.log(DivRoot);
