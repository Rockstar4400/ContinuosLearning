const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());


const handleEvent = (type, data)=>{
    // I remove async and await
    if(type === 'CommentCreated'){
        const status = 
        data.content.includes('orange') ?
         'rejected' : 'approved';
        
        // Event
        axios.post('http://localhost:6000/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        })
    }
}

app.post('/events', (req,res) => {
    const { type, data } = req.body;

    handleEvent(type, data);

    res.send({});
});

// This get all events after service turn down
app.listen(8000,async () => {
    console.log("Listening on 8000");
    try {
      
      // Event
      const res = await axios.get("http://localhost:6000/events");
   
      for (let event of res.data) {
        console.log("Processing event:", event.type);
   
        handleEvent(event.type, event.data);
      }
    } catch (error) {
      console.log(error.message);
    }
});