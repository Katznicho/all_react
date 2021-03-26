import React from 'react'
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { useStateValue } from '../stateProvider';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const [{user}, dispatch] = useStateValue()
    const login = () => {
        
    }
    const Register = () => {
        const history = useHistory()
        const unsubscribe = auth.signInWithPopup(provider)
            .then((response) => {
                history.push('/')
                
            })
           .catch(error=>console.log(error))
        console.log(user)
    }  
     return (
        <div className="login">
            <div className="login__body">
                <div className="login__info">
                    <img
                        src="https://media3.picsearch.com/is?_DQHPRLK7pllc7AihW_FmmeSwHuOSgrcmBwyLP7OkG0&height=169"
                        alt="not found"
                    ></img>
                    <Button
                        color="primary"
                        onClick = {login}
                        variant="contained">LoginWithGoogle</Button>
                </div>
            </div>
             <p>Dont have an account <Button
                 color="primary"
                 onClick = {Register}
                 variant="contained"
             >RegisterWithGoogle</Button></p>
        </div>
    )
}

export default Login
