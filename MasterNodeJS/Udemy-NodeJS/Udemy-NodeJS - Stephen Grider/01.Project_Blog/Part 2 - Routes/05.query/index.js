const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
    if(type === 'PostCreated'){
        const { id, title } = data;

        posts[id] = { id, title, comments: [] };
    }

    if(type === 'CommentCreated'){
        const { id, content, postId, status } = data;

        const post = posts[postId];
        post.comments.push({ id, content, status });
    }

    if(type === 'CommentUpdated'){
        const { id, content, postId, status } = data;

        const post = posts[postId];

        const comment = post.comments.find(comment => {
            return comment.id === id;
        });

        comment.status = status;
        comment.content = content;
    }
}

app.get('/posts', (req, res) => {
    res.send(posts);
})

app.post('/events', (req, res) => {
    const { type, data } = req.body;

   handleEvent(type, data);

    res.send({});
})

// This get all events after service turn down
app.listen(7000,async () => {
    console.log("Listening on 7000");
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