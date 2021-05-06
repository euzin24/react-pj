import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App1/App1';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App2 from './App2/App2';
// import Myblog from './myblog-component/Myblog';
import Myblogre from './myblog-re/Myblogre'

ReactDOM.render(
  <BrowserRouter>
      <Myblogre />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
