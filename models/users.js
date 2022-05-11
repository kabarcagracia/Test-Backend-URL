const moongose = require('mongoose');
const Schema = moongose.Schema;


const NewUser = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = moongose.model('users', NewUser);