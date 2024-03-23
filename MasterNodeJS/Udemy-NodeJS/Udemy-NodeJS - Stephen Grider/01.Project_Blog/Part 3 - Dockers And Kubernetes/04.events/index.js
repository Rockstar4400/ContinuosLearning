const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);

    // Post
    axios.post('http://posts-clusterip-srv:4000/events',event)
    .catch((err) => {console.log(err.message)});

    //Comments
    axios.post('http://comments-srv:5000/events',event)
    .catch((err) => {console.log(err.message)});

    // Query
    axios.post('http://query-srv:7000/events',event)
    .catch((err) => {console.log(err.message)});

    // Moderation
    axios.post('http://moderation-srv:8000/events',event)
    .catch((err) => {console.log(err.message)});

    res.send({ status: 'OK' });
});

app.get('/events', (req, res) =>{
    res.send(events);
});

app.listen(6000, () => {
    console.log("Listening on 6000");
  });