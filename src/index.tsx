import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { renderTree } from './render';
import reportWebVitals from './reportWebVitals';
import state , { addPost, StateType } from './state/state';

 


renderTree(state)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
