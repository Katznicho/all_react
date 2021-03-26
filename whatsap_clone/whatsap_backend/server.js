import express from 'express';
import mongoose from 'mongoose';
import Messages from './message.js'
import cors from 'cors';
import Pusher from 'pusher';
//config
const app = express()
const port = process.env.PORT || 9000
//middleware
app.use(cors())
app.use(express.json())


//pusher
const pusher = new Pusher({
    appId: "1129001",
    key: "2cfe85c4a93b849cea2c",
    secret: "5f861e2960fd022c3b58",
    cluster: "ap2",
    useTLS: true
});
  

//secure password AJRboPAKU5efnfrO
//mongodb+srv://admin:<password>@cluster0.clw8e.mongodb.net/<dbname>?retryWrites=true&w=majority
//api 
//connect
const connect_url = 'mongodb+srv://admin:AJRboPAKU5efnfrO@cluster0.clw8e.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connect_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})
const db = mongoose.connection
db.once('open',
    () => {
        console.log('connected');
        const msgCollection = db.collection('messages');
        const changeStreams = msgCollection.watch()
        changeStreams.on('change', (change) => {
            //console.log('change', change)
            if (change.operationType === 'insert') {
                const messageDetails = change.fullDocument
                pusher.trigger('messages', 'inserted', {
                    name: messageDetails.name,
                    message: messageDetails.message,
                    received: messageDetails.received,
                    timestamp:messageDetails.timestamp
                });
            }
            else {
                console.log('error')
            }
        })
    }
)
// connection.on("connected", () => console.log('we are connected'))
// connection.on('error', (error) => console.log(`There was error ${error}`))
//urls
app.get('/', (req, res) => (res.send('Hello word')))
app.post('/api/whatsapp/messages', (req, res) => {
    const dbMessage = req.body;
    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send('internal server error')
        }
        else {
            res.status(200).send(data)
        }
    })
})
app.get('/api/whatsapp/allmessages', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
                res.status(500).send('an error')
        }
        else {
            res.status(201).send(data)
        }
        })
})
app.listen(port , ()=>console.log(`listening ${port}`))