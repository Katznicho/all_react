import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {NearMe, ExpandMore, AccountCircle} from '@material-ui/icons'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                        <Avatar
                        className="post__avatar"
                        src={profilePic} />
                <div className="post__topInfo">
                    
                        <h3>{username}</h3>
                    
                        <p>
                            { timestamp && new Date(timestamp.toDate()).toUTCString()
                            }</p>
                </div>
            </div>
                
            
                <div className="post__bottom">
                    <p>{ message}</p>
                </div>
                <div className="post__image">
                    <img
                        src={image}
                        alt="not found"></img>
            </div>
            <div className="post__options">
                <div className="post__icon">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__icon">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                <div className="post__icon">
                    <NearMe />
                    <p>share</p>
                </div>
                <div className="post__icon">
                    <AccountCircle />
                    <ExpandMore/>
                </div>
            </div>
                
            
        </div>
    )
}

export default Post
