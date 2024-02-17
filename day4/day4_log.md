## Day 4/15

📅 16/02/2024 | Things I have learned/ done.

### Routing and get request without express

- url routing
- pathname
- get data from form and display that on screen

### Introduction to express

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
    

### Express and express generator

- Files structure
    - bin
    - public
    - routes
    - views
    - app.js
    - package.json
    - package-lock.json

- To start the server

```jsx
npm start
```

### Express and express handlebars

index.js

```jsx
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const values = ['milan', 'milosh']

  const person = {name: 'milan', comments:{comment: 'my comment', date: '17/02/2024'}}

  const adminPerson = {name: 'milan', admin: true}

  res.render('index', {values, person, adminPerson});
});

module.exports = router;
```

index.hbs

```jsx
{{!-- for loop in hbs --}}

{{#each values}}

<h3>{{@index}} . {{this}}</h3>

{{/each}}

{{!-- display inner object value --}}

<p>{{person.comments.comment}}</p>

{{!-- with (displaying objects) --}}

{{#with person}}

    <h2>{{name}}</h2>

    {{#with comments}}

        <h2>{{comment}}</h2>
        <h2>{{date}}</h2>

    {{/with}}

{{/with}}

{{!-- if condition --}}

{{#if adminPerson.admin}}

<h1>This is admin</h1>

{{else}}

<h1>This is not admin</h1>

{{/if}}
```

- for loop
    
    ```jsx
    {{#each values}}
    
    <h3>{{@index}} . {{this}}</h3>
    
    {{/each}}
    ```
    
    - {{#each}} will work as a for loop in hbs.
    - {{/each}} is used to close the {{#each}}.
    - The {{this}} is put inside the {{#each}} and {{/each}} for print the values.
    - The {{this}} execute only once.
    - The {{@index}} is used to get the index value.
- object (display object value)
    
    ```jsx
    <p>{{person.comments.comment}}</p>
    ```
    
- if condition
    
    ```jsx
    {{#if adminPerson.admin}}
    
    <h1>This is admin</h1>
    
    {{else}}
    
    <h1>This is not admin</h1>
    
    {{/if}}
    ```
    
- with (used to display inner/ multiple object)
    
    ```jsx
    {{#with person}}
    
        <h2>{{name}}</h2>
    
        {{#with comments}}
    
            <h2>{{comment}}</h2>
            <h2>{{date}}</h2>
    
        {{/with}}
    
    {{/with}}
    ```