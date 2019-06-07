const express = require("express");
const bodyParser = require("body-parser");
const { contacts, vehicles, comments, products } = require('./data/index')
const app = express();

app.use(express.static('public'))
app.use(bodyParser.json())

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

// app.get to get each whole file
app.get('/contacts', (req, res) => {
    res.json(contacts)
})

app.get('/vehicles', (req, res) => {
    res.json(vehicles)
})

app.get('/comments', (req, res) => {
    res.json(comments)
})

app.get('/products', (req, res) => {
    res.json(products)
})


// app.get with ID to get one item in file at a time
app.get('/contacts/:id', (req, res) => {
    // res.json(contacts)
    const getContact = contacts.find(i => i._id == req.params.id);
    res.send(getContact);  
})

app.get('/vehicles/:id', (req, res) => {
    // res.json(vehicles)
    const getVehicle = vehicles.find(i => i._id == req.params.id);
    res.send(getVehicle); 
})

app.get('/comments/:id', (req, res) => {
    // res.json(comments)
    const getComment = comments.find(i => i._id == req.params.id);
    res.send(getComment); 
})

app.get('/products/:id', (req, res) => {
    // res.json(products)
    const getProduct = products.find(i => i._id == req.params.id);
    res.send(getProduct); 
})


// add.post
let lastId = contacts[contacts.length - 1]._id; //this is how I'll increment, then ++

app.post('/contacts', (req, res) => {
    const newContact = req.body;
    lastId++;
    newContact._id = lastId;
    contacts.push(newContact);
    res.send(newContact); 
})

app.post('/vehicles', (req, res) => {
    
})


app.post('/comments', (req, res) => {
    
})


app.post('/products', (req, res) => {
    
})
