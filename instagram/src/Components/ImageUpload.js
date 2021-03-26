import { Button, Input } from '@material-ui/core'
import React, { useState } from 'react';
import { db, storage } from '../firebase_config';
import firebase from 'firebase';
import './ImageUpload.css';
function ImageUpload({userName}) {
    const [caption, setCaption] = useState("")
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
    const handleUpload = () => {
        const uploadTask = storage.ref(`image/${image.name}`).put(image)
        uploadTask.on("state_changed",
            (snapshot) => {
                const _progress = Math.round(
                (snapshot.bytesTransferred/snapshot.totalBytes)*100
                )
                setProgress(_progress)
            },
            (error) => {
                console.log(error.message)
            },
            () => {
                storage
                    .ref("image")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        //post it to the db
                        db.collection('posts').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            userName
                            
                        })
                        setProgress(0)
                        setCaption("")
                        setImage("")
                        
                    })
            }
        )
    }
    return (
        <div className="image__upload">
            <Input
                type="text"
                placeholder="enter caption"
                value={caption}
                onChange={(e)=>setCaption(e.target.value)}
            />
            <progress value={progress} max="100" className="progress__bar"></progress>
            <Input
                type="file"
                onChange={handleChange}
            />
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload

