import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About'
import Products from './Products'
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';





import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route index element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products/>}/>
  <Route/>
    </Routes>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


