var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signup', function(req, res, next) {
    res.render('signup', { title: 'Liga invicta' });
});

router.get('/signin', function(req, res, next) {
    res.render('signin', { title: 'Liga invicta' });
});

router.post('/signup', function(req, res, next) {
    res.redirect('/premio'); //, { title: 'Liga invicta' });
});

router.post('/signin', function(req, res, next) {
    res.redirect('/premio'); //, { title: 'Liga invicta' });
});

module.exports = router;