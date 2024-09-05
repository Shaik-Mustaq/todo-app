import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';// This line can remain commented out if index.css is deleted
import App from './App';
//import reportWebVitals from './reportWebVitals'; // This import is not needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
