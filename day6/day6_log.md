## Day 6/15

📅 18/02/2024 | Things I have learned/ done.

- user signup with express and mongodb
<a href="../user_signup/">Click Here for code</a>
    - 1st make an express project
    - Then install all the packages `npm install`
    - `npm start`
    - `nodemone` is a module that monitors your Node.js application for changes to files in the project directory and automatically restarts the server when changes are detected.
    This means that you don't have to stop and restart your applications in order for your changes to take effect.
    - For using mongodb in nodejs we have to install the the mongodb module `npm install mongodb` or install mongoose `npm install mongoose`
    - For getting the connection to the database (mongodb)
        
        ```jsx
        // Retrieve
        var MongoClient = require('mongodb').MongoClient;
        
        // Connect to the db
        MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
          if(!err) {
            console.log("We are connected");
          }
        });
        ```
        
    - For getting the connection in mongoose
        
        ```jsx
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
        ```