const express = require('express')
const router = express.Router()
const { contacts } = require('../data/index')

let lastId = contacts[contacts.length - 1]._id; //this is how I'll increment, then ++

router.get('/contacts', (req, res) => {
    res.json(contacts)
})

router.get('/contacts/:id', (req, res) => {
    // res.json(contacts)
    const getContact = contacts.find(i => i._id == req.params.id);
    res.send(getContact);  
})

router.post('/contacts', (req, res) => {
    const newContact = req.body;
    lastId++;
    newContact._id = lastId;
    contacts.push(newContact);
    res.send(newContact); 
})

module.exports = router;