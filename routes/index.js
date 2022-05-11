var express = require('express');
var router = express.Router();

const user = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', async (req, res) =>{
  const User = new user(req.body);
  console.log(new user(req.body));
  res.json({User});
  await User.save();
});
router.get('/get', async (req, res) =>{
  const Users = await user.find();
  res.json({Users});
});

module.exports = router;
