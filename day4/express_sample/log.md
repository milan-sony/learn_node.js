### Express and express generator

### To create an express project

1. Create an express project
    
    ```jsx
    npx express-generator --hbs
    ```
    
2. Then install all the packages (this will install all the packages and ‘node_modules’ folder will be created)
    
    ```jsx
    npm install
    ```
    
3. If any vulnerabilities found on the installed packages type
    
    ```jsx
    npm audit fix --force
    ```
    
4. Finally start the server
    
    ```jsx
    npm start
    ```

### Files structure

- bin
    - www
- node modules
- public
    - images
    - javascripts
    - stylesheets
- routes
    - index.js
    - user.js
- views
    - error.hbs
    - index.hds
    - layout.hbs
- app.js
- package.json
- package-lock.json


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

