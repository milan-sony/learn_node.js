var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const values = ['milan', 'milosh']

  res.render('index', {values, person});
});

module.exports = router;
