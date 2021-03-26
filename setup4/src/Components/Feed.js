import React,{useState, useEffect} from 'react'
import './Feed.css';
import StoryReel from './StoryReel'
import MessageSender from './MessageSender';
import Post from './Post';
import {db} from '../firebase'
function Feed() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(onSnapshot => {
           setPosts(onSnapshot.docs.map(doc=>({id:doc.id, data:doc.data()})))
       }) 

    }, [])
    console.log(posts)
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {
                posts.map(({ id, data }) => (<Post
                    key={id}
                    profilePic={data.profilePic}
                    username={data.username}
                    image={data.image}
                    timestamp={data.timestamp}
                    message={data.message}

                />))
            }
                </div>
    )
}

export default Feed
