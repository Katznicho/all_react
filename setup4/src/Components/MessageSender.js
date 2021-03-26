import React, { useState}from 'react'
import './MessageSender.css';
import Avatar from '@material-ui/core/Avatar';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase';
import {db} from '../firebase'
function MessageSender() {
    const [{user:{photoURL, displayName}}] = useStateValue()
    const [input, setInput] = useState('')
    const [image, setImage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        //some db
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:photoURL,
            username:displayName,
            image:image
        })
        setInput('')
        setImage('')

    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={ photoURL}/>
                <form>
                    <input
                        value={input}
                        name="input"
                        onChange={(e)=>setInput(e.target.value)}
                        className="messageSender__input" placeholder={`whats on your mind ${displayName}`} />
                    <input
                        value={image}
                        name="image"
                        onChange = {(e)=>setImage(e.target.value)}
                        placeholder={`image url optional`} />
                    <button type="submit" onClick={handleSubmit}>Hidden eve</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCallIcon style={{color:'red'}} />
                    <h3>Live video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:'green'}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    
    )
}

export default MessageSender
