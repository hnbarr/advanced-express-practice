const { products } = require('../data/index')

const list = () => {
    return products
}

const show = () => {
    return products.find(p => p._id == id);
}

const create = () => {
    newProduct._id = products[products.length - 1]._id + 1;
    products.push(newProduct);
    return products;
}

module.exports = { list, show, create }