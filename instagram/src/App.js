import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Posts from './Components/Posts';
import { db } from './firebase_config';
import Modal from '@material-ui/core/Modal'; 
import { Button, Input } from '@material-ui/core';
import { auth } from './firebase_config';
import ImageUpload from './Components/ImageUpload';
import Avatar from '@material-ui/core/Avatar';
function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function App() {
  const classes = useStyles()
  const [posts, setPosts] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [modalStyle] = useState(getModalStyle);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [openSignIn, setOpenSignIn] = useState(false)
  const [photo, setPhoto] = useState('')
  const [user, setUser] = useState(null)
  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map(doc => ({
        id:doc.id,
       post:doc.data()
      })))
     })
  }, [])

  const signUp = (event) => {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        setPhoto(authUser.user.photoURL)
        return authUser.user.updateProfile({
          displayName:userName
        })
      })
      .catch((error) => alert(error.message))
    setEmail("")
    setPassword("")
    setUserName("")
    setOpenModal(false)
    
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        //user has logged in
        console.log(user)
        setUser(user)
      }
      else {
       // else user logged out 
        setUser(null)
      }
    })
    return ()=>unsubscribe()
  }, [user, userName])
  
  const signIn = (event) => {
    event.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(authUser => {
        setPhoto(authUser.user.photoURL)
       })
      .catch((error) => alert(error.message))
      setEmail("")
      setPassword("")
    setOpenSignIn(false)
  }
return (
  <div className="app">
      {/*open and close modals */}
      <Modal
      open={openModal}
      onClose={()=>setOpenModal(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <form className="app__signup">
          <center>
          <img
          className="app__header__image"
          src="images/instagram.jpg" alt="not found"></img>   
        </center>
        <Input
          type="text"
          value={userName}
          placeholder="Enter user name"
          onChange={(e)=>setUserName(e.target.value)}
        />
        <Input
          type="text"
          value={email}
          placeholder="Enter email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <Input
          type="text"
          value={password}
          placeholder="Enter password"
          onChange={(e)=>setPassword(e.target.value)}
          />
          <Button onClick={signUp} >SignUp</Button>
        </form>
       
   </div>
    </Modal>
    {/*sigin modal */}
    <Modal
      open={openSignIn}
      onClose={()=>setOpenSignIn(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <form className="app__signup">
          <center>
          <img
          className="app__header__image"
          src="images/instagram.jpg" alt="not found"></img>   
        </center>
        <Input
          type="text"
          value={email}
          placeholder="Enter email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <Input
          type="text"
          value={password}
          placeholder="Enter password"
          onChange={(e)=>setPassword(e.target.value)}
          />
          <Button onClick={signIn} >SignUp</Button>
        </form>
       
   </div>
    </Modal>
    {/*sigin* modal */}
    <div className="app__header">
        <img
          className="app__header__image"
        src="images/instagram.jpg" alt="not found"></img>   
        {
        user ? (
          <div className="app__header__logout">
          <Button onClick={() => auth.signOut()}>LogOut</Button>
          <Avatar
          className="posts__avatar"
          src={user?user.photoURL:""}
              alt="not found" />
            <h2>{user.displayName }</h2>
          </div>
          
        ) :
            <div className="app__login__container">
              <Button onClick={() => setOpenModal(true)}>SignUp</Button>
              <Button onClick={() => setOpenSignIn(true)}>SignIn</Button>
            </div>
    
        }
    </div>
    <div className="app__posts">
    {
      posts.map(({id, post}) => (
        <Posts key={id} post={post} postId={id} user={user && user.displayName}/>
      ))
  }
    </div> 
    {/*image upload */}
    {
      user?<ImageUpload userName={user&&user.displayName}/>:<h2>You are loggedOut</h2>
    }
    </div>
      )
}
export default App;
