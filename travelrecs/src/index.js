import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import Header from './components/Header';

import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <Header />
      
      <App />
    </Router>
    <Footer />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
