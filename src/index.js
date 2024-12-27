import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Component from './login';
import Repository from './repository';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/repository' element={<Repository/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Login/>}/>
  </Routes>
  </BrowserRouter>
);

