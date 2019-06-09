const express = require('express')
const router = express.Router()
// const { contacts } = require('../data/index')
const { list, show, create } = require('../controllers/contacts')


// let lastId = contacts[contacts.length - 1]._id; //this is how I'll increment, then ++

router.get('/contacts', (req, res) => {
    res.json(list())
})

router.get('/contacts/:id', (req, res) => {
    // res.json(contacts)
    // const getContact = contacts.find(i => i._id == req.params.id);
    // res.send(getContact);  
    res.json(show(req.params.id));
})

router.post('/contacts', (req, res) => {
    // const newContact = req.body;
    // lastId++;
    // newContact._id = lastId;
    // contacts.push(newContact);
    // res.send(newContact); 
    res.json(create(req.body));
})

module.exports = router;