const { vehicles } = require('../data/index')

const list = () => {
    return vehicles
}

const show = (id) => {
    return vehicles.find(v => v._id == id);
}

const create = (newVehicle) => {
    newVehicle._id = vehicles[vehicles.length - 1]._id + 1;
    vehicles.push(newVehicle);
    return vehicles;
}

module.exports = { list, show, create }