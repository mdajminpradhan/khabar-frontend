import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/app.scss';
import Routes from './Routes';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API;
// axios.defaults.headers['Accept'] = 'application/json'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
