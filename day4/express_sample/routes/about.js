var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { value: 'This is the about page'});
});

module.exports = router;
