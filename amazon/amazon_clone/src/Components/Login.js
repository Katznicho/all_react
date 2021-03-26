import React, {useState} from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './FirebaseConfig/firebase';

function Login() {
    //historyhook
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    const [showUserName, setShowUserName] = useState(false)
    const signIn = (e) => {
        e.preventDefault()
        if (email === '' || password === '') {
            alert('email and password and username are required')
        }
        auth.signInWithEmailAndPassword(email, password)
            .then((authObj) => {
                if (authObj) {
                    history.push('/')
                }
                else {
                    alert('An error occured')
                }

            })
            .catch((error)=>alert('An error occured'))
        setEmail('')
        setPassword('')

        
    }
    const register = e => {
        e.preventDefault()
        if (email === '' || password === '' ||username === '') {
            alert('email , password and username are required')
        }
        localStorage.setItem('username', username)
        auth.createUserWithEmailAndPassword(email, password)
            .then((authObj) => {
                if (authObj) {
                    history.push('/')
                }
                else {
                    alert('An error has occured')
                }
            })
            .catch((error) => console.log('There was an error'))
        setEmail('')
        setPassword('')
        setUserName('')
        setShowUserName(false)
        
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="not found"
            >
            </img>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-email</h5>
                    <input type="email"
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    {
                        showUserName ? (
                            <span>
                                <h5>UserName</h5>
                                <input type="text"
                                    value={username}
                                    name="username"
                                    onChange ={(e)=>setUserName(e.target.value)}
                                />
                            </span>
                          ) :null
                    }
                    
                    <h5>Password</h5>
                    <input type="password"
                        name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button
                        className="login__signInButton"
                        onClick = {signIn}
                        type="submit">sigIn</button>
                </form>
                <p>By signing in you agree to Amazon terms and conditions of use and sale</p>
                {
                    showUserName?<button
                    onClick={register}
                        className="login__createButton">Register</button> :
                        <button
                        onClick={()=>setShowUserName(true)}
                        className="login__createButton">CreateYourAccount</button>
                  }

            </div>
            
        </div>
    )
}

export default Login
