const express = require('express')
const router = express.Router()
const { comments } = require('../data/index')

let lastId = comments[comments.length - 1]._id; //this is how I'll increment, then ++


router.get('/comments', (req, res) => {
    res.json(comments)
})

router.get('/comments/:id', (req, res) => {
    // res.json(comments)
    const getComment = comments.find(i => i._id == req.params.id);
    res.send(getComment); 
})

router.post('/comments', (req, res) => {
    const newComment = req.body;
    newComment.postId = 1
    lastId++;
    newComment._id = lastId;
    contacts.push(newComment);
    res.send(newComment);
})

module.exports = router;