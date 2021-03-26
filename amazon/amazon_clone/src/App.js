import React, {useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import CheckOut from './Components/CheckOut';
import Login from './Components/Login';
import { auth } from './Components/FirebaseConfig/firebase';
import {useStateValue} from './Context/StateProvider'
import Payment from './Components/Payment';

function App() {
  const [{user}, dispatch] = useStateValue()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const username = localStorage.getItem('username')
        authUser.updateProfile({
            displayName:username
          })
        dispatch({
          type: "SET_USER",
          payload:authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          payload:null
         })
      }
    }) 
    return ()=>unsubscribe
  }, [dispatch, user])
  return (
    <Router>
       <div className="app">
          <Switch>
          <Route path="/checkout">
              <Header />
            <CheckOut/>
          </Route>
          <Route path="/payment">
              <Header />
               <Payment/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header />
            <Home/>
        </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
