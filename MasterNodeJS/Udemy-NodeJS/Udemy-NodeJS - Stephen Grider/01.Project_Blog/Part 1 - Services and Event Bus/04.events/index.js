const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
app.use(bodyParser.json());


app.post('/events', (req, res) => {
    const event = req.body;

    // React
    axios.post('http://localhost:3000/events',event)
    .catch((err) => {console.log(err.message)});

    // Post
    axios.post('http://localhost:4000/events',event)
    .catch((err) => {console.log(err.message)});

    //Comments
    axios.post('http://localhost:5000/events',event)
    .catch((err) => {console.log(err.message)});

    res.send({ status: 'OK' });
});

app.listen(6000, () => {
    console.log('Listen 6000');
})