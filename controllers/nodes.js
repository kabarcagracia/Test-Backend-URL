const node = require('../models/nodes_models');
const option = require('../models/option_model');
exports.create_nodo = async (req, res) =>{
    var fecha = (new Date).getTime();
    var params = {
        nodename: req.body.nodename,
        marca: req.body.marca,
        modelo: req.body.modelo,
        patente: req.body.patente,
        fcreate: fecha
    };
    const Node = new node(params);
    await Node.save();
    res.json({msg: 'datos conectados'});
};
exports.read_nodo = async (req, res) =>{
    var Nodes = await node.find();
    res.json({Nodes});
};
exports.update_nodo = async (req, res) =>{
    console.log(req.body);
    await node.updateOne({_id: req.body.id},{ $set:{nodename: req.body.nodename, marca: req.body.marca, modelo: req.body.modelo, patente: req.body.patente}}, function(err){

        if(!err){
            res.json({msg: "actualizado correctamente"});
        }
        else{
            res.json({msg: "error"});
        }
    });
    
    // `doc` is the document _before_ `update` was applied
    
};
exports.delete_nodo = async (req, res) =>{
    node.deleteOne({ _id: req.body.id }, function(err) {
        if (!err) {
                res.json({msg: "eliminado correctamente"});
        }
        else {
                res.json({msg: "error"});
        }
    });

};
exports.options_nodo = async (req, res) =>{
    var options = await option.find();
    res.json({options});
};

exports.create_devices = (req, res) =>{
    node.updateOne({_id: req.body.id},{ $push:{devices: {id: req.body.mac, pass:req.body.password, types:req.body.sensors}}}, function(err){

        if(!err){
            console.log("ok");res.json({msg: "actualizado correctamente"});
            
        }
        else{
            
            console.log("error");res.json({msg: "error"});
        }
    });
};