// var express = require('express');
// var router = express.Router();
// var mongoClient = require('mongodb').MongoClient;

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.post('/submit', function(req, res){

//   console.log(req.body);

//   mongoClient.connect("mongodb://localhost:27017", function(err, client){

//     if(!err){
//       console.log('Database connected');
//       client.db('sampledb').collection('user').insertOne(req.body)
//     }else{
//       console.log('Error')
//     }

//   });

//   res.send("success");

// });

// module.exports = router;

// mongoose
var express = require('express');
var router = express.Router();
var url = 'mongodb://127.0.0.1:27017/sampledb';
const mongoose = require("mongoose");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', (req,res) => {

  console.log(req.body)

  mongoose.connect(url)
  .then((client) => {
    console.log('MongoDB connected successfully');
    // client.db('ecommerce').collection('user').insertOne(req.body)
    client.connection.db.collection('user').insertOne(req.body)
    res.send("Data Inserted")
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
})
module.exports = router;
