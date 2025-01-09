// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
    res.send(comments.getComments());
});

// Post a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.addComment(comment);
    res.send('Comment added');
});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});