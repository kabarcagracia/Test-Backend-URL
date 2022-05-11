var express = require('express');
var jwt = require('jsonwebtoken');
var key = require('../configs/config');
const node = require('../models/nodes_models');

// obtener token usando id, pass
exports.post_get_token = async (req, res) =>{
    var Nodes = await node.findOne({devices: {id:req.body.id, pass:req.body.pass}});
    if(Nodes){
        const payload = {
            check:  true,
            id: req.body.id
        };
        await jwt.sign(payload, key.llave, function(err, token) {
            if(err){
                res.status(401).json({
                    msg: "no se pudo generar el token"
                });
            }else{
                res.status(200).json({
                    token: token,
                    node: Nodes.nodename
                });
            }   
        });
    }else{
        res.status(401).json({
            msg: "no autorizado"
        });
    }
};

//enviar data con token.
exports.post_data = async (req, res) =>{
    var token = req.headers['authorization'];
    
    if(!token){
        res.status(401).json({
            msg: "token invalido"
        });
    } else {
        token = token.replace('Bearer ', '')
        await jwt.verify(token, key.llave, function(err, user) {
            if (err) {
                res.status(401).json({
                    msg: "token corrupto"
                });
            } else {
                /*          AQUI DEBE IR LA SUBIDA DE DATOS A LA DB     */
                //////////////////////////////////////////////////////////


                //////////////////////////////////////////////////////////
                console.log(req.body);
                res.status(200).json({
                    msg: "datos cargados"
                });
      }
    })
    }
};
