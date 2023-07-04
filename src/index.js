//import React
import React from 'react';
//import ReactDOM
import ReactDOM from 'react-dom/client';
//import stylesheet
import './index.css';
//import App compoment
import App from './App';

//this is the entry point
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
