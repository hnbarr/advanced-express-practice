const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const contactRouter = require('./routes/contacts')
const vehicleRouter = require('./routes/vehicles')
const commentRouter = require('./routes/comments')
const productRouter = require('./routes/products')


app.use(express.static('public'))
app.use(bodyParser.json())

app.use(contactRouter)
app.use(vehicleRouter)
app.use(commentRouter)
app.use(productRouter)

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});


