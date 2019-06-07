const express = require('express')
const router = express.Router()
const { vehicles } = require('../data/index')


let lastId = vehicles[vehicles.length - 1]._id; //this is how I'll increment, then ++

router.get('/vehicles', (req, res) => {
    res.json(vehicles)
})

router.get('/vehicles/:id', (req, res) => {
    // res.json(vehicles)
    const getVehicle = vehicles.find(i => i._id == req.params.id);
    res.send(getVehicle); 
})

router.post('/vehicles', (req, res) => {
    const newVehicle = req.body;
    lastId++;
    newVehicle._id = lastId;
    contacts.push(newVehicle);
    res.send(newVehicle);
})

module.exports = router;