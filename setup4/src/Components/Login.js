import React from 'react'
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import {useStateValue} from '../StateProvider'
function Login() {
    const[{user}, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((authUser) => {
                if (authUser) {
                    dispatch({
                        type: "SET_USER",
                        payload:authUser.user
                })
            }            
            })
            .catch(error=>alert(error.message))

    }
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://media1.picsearch.com/is?XovcNuHMHOwxASiA-Mb9UddyAVvh1rX4GCzoYsr9XCQ&height=341"
                    alt="not found"></img>
                <img
                    src="https://media1.picsearch.com/is?B55GPZWoZBfI251a2Zpr8-sbrkpqhai8M8JGNIfjmUs&height=128"
                    alt="not found"></img>
            </div>
            <Button
                    onClick={signIn}
                    
                >SignIn</Button>
        </div>
    )
}

export default Login
