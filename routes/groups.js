var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(0){
        res.render('groups', { title: 'Express' });

    }
    else{
        res.redirect('/')
    }
});

module.exports = router;