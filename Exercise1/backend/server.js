import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Videos from './dbModel.js';

//App Config
const app = express()
const port = process.env.PORT || 4000
const connection_url = 'mongodb+srv://nhi:CK2wH0cbdvw9Bbjl@cluster0.x8t2bt5.mongodb.net/?retryWrites=true&w=majority'

//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Server is running"))
app.post('/v2/posts', async (req, res) => {
    try {
        const dbVideos = req.body;
        const data = await Videos.create(dbVideos);
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/v2/posts', async (req, res) => {
    try {
        const data = await Videos.find().exec();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))