const mongoose = require('mongoose');


const uri = "mongodb+srv://FactorB2020:FactorBdeveloper2020@cluster0.fswed.mongodb.net/FactorB?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
  .then(db => console.log('Base de Datos Conectada!!!'))
  .catch(err => console.log(err))
}

module.exports = connectDB;