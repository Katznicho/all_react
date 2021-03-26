import { Avatar } from '@material-ui/core';
import React, {useState} from 'react'
import './Chat.css';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { AttachFile } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Axios from '../axios';

function Chat({messages}) {
    const [input, setInput] = useState('')
    const sendMessage = async (e) => {
        e.preventDefault()
       await  Axios.post('/api/whatsapp/messages',{
            message:input,
            name:"James",
            timestamp:"clea",
            received:true
        })
        setInput('')

    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>last seen at</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {
                    messages && messages.map(({ name, timestamp, received, message }) => (
                        //console.log()
                        <p className={`chat__message ${received&& "chat__receiver"}`} >
                            {
                                console.log(name)
                            }
                            <span className="chat__name">{name}</span>
                        {message}
                    <span className="chat__timestamp">
                        {
                            timestamp
                        }
                    </span>
    
                    </p>  
    ))
                }
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button
                        onClick = {sendMessage}
                        type="submit">send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
