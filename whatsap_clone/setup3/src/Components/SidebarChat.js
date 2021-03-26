import React from 'react'
import './SidebarChat.css';
import Avatar from '@material-ui/core/Avatar';
export const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>This is the message</p>
            </div>

        </div>
    )
}
