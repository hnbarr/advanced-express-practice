const express = require('express')
const router = express.Router()
const { products } = require('../data/index')
const { list, show, create } = require('../controllers/products')



let lastId = products[products.length - 1]._id; //this is how I'll increment, then ++

router.get('/products', (req, res) => {
    res.json(products)
})

router.get('/products/:id', (req, res) => {
    // res.json(products)
    const getProduct = products.find(i => i._id == req.params.id);
    res.send(getProduct); 
})


router.post('/products', (req, res) => {
    const newProduct = req.body;
    lastId++;
    newProduct._id = lastId;
    contacts.push(newProduct);
    res.send(newProduct);
})

module.exports = router;