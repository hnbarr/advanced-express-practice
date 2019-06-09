const { comments } = require('../data/index')

const list = () => {
    return comments
}

const show = () => {
    return comments.find(comment => comment._id == id);
}

const create = () => {
    newComment._id = comments[comments.length - 1]._id + 1;
    comments.push(newComment);
    return comments;
}

module.exports = { list, show, create }