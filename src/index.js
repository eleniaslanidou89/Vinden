import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
//import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
<App />

</BrowserRouter>,
document.getElementById('root'));


//registerServiceWorker();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


