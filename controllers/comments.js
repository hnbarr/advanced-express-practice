const { comments } = require('../data/index')

const list = () => {
    return comments;
}

const show = (id) => {
    return comments.find(c => c._id == id);
}

const create = (newComment) => {
    newComment._id = comments[comments.length - 1]._id + 1;
    comments.push(newComment);
    return comments;
}

module.exports = { list, show, create }