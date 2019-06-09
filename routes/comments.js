const express = require('express')
const router = express.Router()
// const { comments } = require('../data/index')
const { list, show, create } = require('../controllers/comments')


// let lastId = comments[comments.length - 1]._id; //this is how I'll increment, then ++

router.get('/comments', (req, res) => {
    res.json(list())
})

router.get('/comments/:id', (req, res) => {
    // res.json(comments)
    // const getComment = comments.find(i => i._id == req.params.id);
    // res.send(getComment); 
    res,json(show(req.params.id))
})

router.post('/comments', (req, res) => {
    // const newComment = req.body;
    // newComment.postId = 1
    // lastId++;
    // newComment._id = lastId;
    // contacts.push(newComment);
    // res.send(newComment);
    res.json(create(req.body))
})

module.exports = router;