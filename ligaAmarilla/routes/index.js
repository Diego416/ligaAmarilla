var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('signup', { title: 'Liga invicta' });
    res.render('index', { title: 'Liga invicta' });
});

module.exports = router;