
import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Image from './Components/Image';
import Product from './Components/Product';
import Login from './Components/Login';
import { auth } from './firebase';
import {useStateValue} from './stateProvider'
function App() {
  const [{ user }, dispatch] = useStateValue()
  console.log(user)
  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        console.log(authuser)
        const { displayName, email, photoURL } = authuser
      const newUser = { displayName, email, photoURL }
        dispatch({
          type: "REGISTER_USER",
          payload:newUser
        })
      }
      else {
        dispatch({
          type: "LOGOUT_USER"
        })
      }
  })
    return ()=>unsubscribe
  },[user])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
             <Login/>
          </Route>
          <Route path="/">
            <Header />
            <Image />
            <Product/>
          </Route>
        </Switch>
  </div>
    </Router>
    
  );
}

export default App;
