
import './App.css';

import React, {useState} from 'react'
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Images from './Components/Images';
import Products from './Components/Products'
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Images />
        <Products/>
        </div>
    </Router>
  );
}

export default App;
