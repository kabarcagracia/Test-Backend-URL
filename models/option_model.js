const { Timestamp, Double, ObjectId } = require('mongodb');
const moongose = require('mongoose');
const Schema = moongose.Schema;

const NodeOptions = new Schema({
    _id:ObjectId,
    types: Array,
});

module.exports = moongose.model('options', NodeOptions);