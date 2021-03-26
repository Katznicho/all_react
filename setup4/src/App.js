
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widget from './Components/Widget';
import React, { useState } from 'react';
import Login from './Components/Login';
import {useStateValue} from './StateProvider'
function App() {
  const[{user}, dispatch] = useStateValue()

  return (
    <div className="app">
      {
        !user ?
          <Login/>
        :
          <React.Fragment>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widget/>
            </div>
      
          </React.Fragment>
      }
        </div>
  );
}

export default App;
