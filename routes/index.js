var express = require('express');
var router = express.Router();
const Task = require('./models/task')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('splash', { title: 'TaskR' });
});

module.exports = router;
