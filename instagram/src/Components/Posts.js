import React, {useState, useEffect} from 'react';
import './Posts.css';
import Avatar from '@material-ui/core/Avatar';
import { db}from '../firebase_config'
import { Input, Button } from '@material-ui/core';
import firebase from 'firebase';
function Posts({ post: { imageUrl, userName, caption }, postId, user }) {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db.collection('posts')
                .doc(postId)
                .collection('comments')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map(document=>document.data()))
                })
                
        }
        return () => {
            unsubscribe()
        }
    }, [postId])
    const postComment = (e) => {
        e.preventDefault()
        db.collection('posts').doc(postId).collection('comments').add({
            comment: comment,
            userName: user,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setComment("")
    }
    return (
        <div className="posts">
            <div className="posts__header">
                <Avatar
                className="posts__avatar"
                src=""
                alt="not found"
            />
                <h2>{ userName}</h2>

            </div>
            
            <img
                className="posts__image"
                alt="Not found"
                src={imageUrl}></img>
            <h3 className="posts__text"><strong>Nicolas</strong>:{caption}</h3>
            <div className="posts__comments">
                {
                    comments.map((comm,index) =>( 
                        <p key={index}>
                            <strong>{ comm.userName.toUpperCase()} : </strong>{comm.comment}
                        </p>
                    ))
                }
            </div>
            {
             user&&<form className="post__form">
             <Input
                 className="post__input"
                 placeholder="comment"
                 value={comment}
                 onChange={(e)=>setComment(e.target.value)}
             />
             <Button
                 type="submit"
                 className="post__button"
                 variant="contained"
                 color="primary"
                 disabled={!comment}
                 onClick={postComment}
             >Comment</Button>
         </form>
            }
            

        </div>
    )
}

export default Posts
