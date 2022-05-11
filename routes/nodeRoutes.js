var express = require('express');
var router = express.Router();

var devicecontroller = require('../controllers/nodes');
router.get('/nodes', devicecontroller.read_nodo);
router.post('/create', devicecontroller.create_nodo);
router.post('/delete', devicecontroller.delete_nodo);
router.post('/update', devicecontroller.update_nodo);
router.get('/options', devicecontroller.options_nodo);
router.post('/devices', devicecontroller.create_devices);
module.exports = router;