var express = require('express');
var router = express.Router();

//access Task data object
const taskBoardCtrl = require('../controllers/taskBoard');

router.get('/', taskBoardCtrl.index)




