
import './App.css';
import React, {useState, useEffect} from 'react'
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import Pusher from 'pusher-js';
import Axios from './axios';
function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    Axios.get('/api/whatsapp/allmessages')
      .then(({ data }) => setMessages(data))
    .catch(error=>console.log(error.message))
  }, [])
  useEffect(() => {
    const  pusher = new Pusher('2cfe85c4a93b849cea2c', {
      cluster: 'ap2'
    });

    const  channel = pusher.subscribe('messages');
    channel.bind('inserted', (data)=> {
      setMessages([...messages, data])
    });
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])
    return (
      <div className="app">
        <div className="app__body">
          <Sidebar />
          <Chat messages={ messages}/>
        </div>
      </div>
  );
}

export default App;
