var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard');
});

router.get('/signup', function(req, res, next) {
    res.render('signup');
});

router.get('/adminHome', function(req, res, next) {
    res.render('adminHome');
});

router.get('/addProduct', function(req, res, next) {
    res.render('addProduct');
});

module.exports = router;
