import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import './index.css';
// import App from './App';
// import TodoList from "./TodoList"
// import UseEffect from './UseEffect'
import App1 from './App1'

ReactDOM.render(
    <BrowserRouter>
    <App1/>
    </BrowserRouter>
,  document.getElementById('root')
);

