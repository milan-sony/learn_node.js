## Day 4/15

📅 16/02/2024 | Things I have learned/ done.

## Routing and get request without express

- url routing
- pathname
- get data from form and display that on screen

## Introduction to express

```jsx
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
```

- Middleware
    
    use()/ app.use() : Used to handle all the common items that happens in between the request and response. Eg: sessions, user authentication, static file definition etc.
    
    ```jsx
    app.use(function(req, res, next){
        console.log('Middleware')
        next()
    })
    ```