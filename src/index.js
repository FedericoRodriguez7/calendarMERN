import React from 'react';
import ReactDOM from 'react-dom';
import { CalendarApp } from './CalendarApp.js';


import "./style.css";

console.log(process.env)


ReactDOM.render(
    <CalendarApp />,
    document.getElementById("root")

);

