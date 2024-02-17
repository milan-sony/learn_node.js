var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const values = ['milan', 'milosh']

  const person = {name: 'milan', comments:{comment: 'my comment', date: '17/02/2024'}}

  res.render('index', {values, person});
});

module.exports = router;
