var express = require('express');
var router = express.Router();
var devicecontroller = require('../controllers/devices');
router.post('/get_token', devicecontroller.post_get_token);
router.post('/data', devicecontroller.post_data);
module.exports = router;