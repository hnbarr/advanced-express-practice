const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const contactRouter = require('./routes/contacts')

app.use(express.static('public'))
app.use(bodyParser.json())

app.use(contactRouter)

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});


