const express = require('express');
const path = require('path')

const app = express();

app.get('/', function(req, res){
    res.send('Hello World!')
})

app.get('/signup', (req, res) =>{
    res.sendFile(path.join(__dirname, 'signup.html'))
})

app.post('/signup', function(req, res){
    res.send('Account Created Successfully')
})

app.listen(7000, function(){
    console.log("Server Started");
})