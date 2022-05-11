const { Timestamp, Double, ObjectId } = require('mongodb');
const moongose = require('mongoose');
const Schema = moongose.Schema;

const NewNode = new Schema({
    nodename: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    patente: {
        type: String,
        required: true
    },
    new:{
        type: Boolean,
        default: true
    },
    fcreate:{
        type: Number,
        required: true
    },
    devices: Array
});


module.exports = moongose.model('nodes', NewNode);


