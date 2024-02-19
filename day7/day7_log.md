## Day 7/15

📅 19/02/2024 | Things I have learned/ done.

- callback
    
    ```jsx
    function add(num1, num2, callback){
        let err = false
        if(num1 == 0){
            err = true
        }
        callback(num1 + num2, err)
    }
    
    function multiply(num1, num2, callback){
        callback(num1 * num2)
    }
    
    function div(num1, num2, callback){
        callback(num1/num2)
    }
    
    add(10, 20, (sum, err) => {
        if(err){
            console.log("First number is ZERO")
        }else{
            console.log(sum)
            multiply(sum, sum, (product) => {
                console.log(product)
                div(product, 10, (result) => {
                    console.log(result)
                })
            })
        }
    })
    ```
    
- promise
    
    ```jsx
    // promise
    
    const Promise = require('promise')
    
    function add(num1, num2){
        return new Promise((resolve, reject) =>{
    
            if(num1 == 0){
                reject("First no: is ZERO")
            }
            resolve(num1 + num2)
    
        })
    }
    
    add(10, 20).then((sum) =>{
        console.log(sum)
    }).catch((err) =>{
        console.log(err)
    })
    
    ```
    
    - multiple promise
        
        ```jsx
        // promise
        
        const Promise = require('promise')
        
        function add(num1, num2){
            return new Promise((resolve, reject) => {
        
                if(num1 == 0){
                    reject("First no: is ZERO")
                }
                resolve(num1 + num2)
        
            })
        }
        
        function multiply(num1, num2){
            return new Promise((resolve, reject) => {
        
                if(num1 == 0){
                    reject("First no: is ZERO")
                }
                resolve(num1 * num2)
        
            })
        }
        
        function division(num1, num2){
            return new Promise((resolve, reject) => {
        
                if(num1 == 0){
                    reject("First no: is ZERO")
                }
                resolve(num1 / num2)
        
            })
        }
        
        add(0, 20).then((sum) => {
            console.log(sum)
            return multiply(sum, sum)
        }).then((product) => {
            console.log(product)
            return division(product, 10)
        }).then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.log(err)
        })
        ```
        
- promise.all() - The `Promise.all()` method is useful for waiting for multiple asynchronous operations to complete before continuing. For example, you could use Promise.all() to wait for all of the images on a web page to load before displaying the page to the user.
    
    ```jsx
    const Promise = require('promise')
    
    function getName(){
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve('Milan')
            }, 3000)
        })
    }
    
    function getPhone(){
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve('001122334455')
            }, 5000)
        })
    }
    
    Promise.all([getName(), getPhone()]).then((result) =>{
        console.log(result)
    })
    ```
    
- async-await
    
    ```jsx
    const Promise = require('promise')
    
    function getName(){
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve('Milan')
            }, 3000)
        })
    }
    
    function getPhone(){
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve('001122334455')
            }, 5000)
        })
    }
    
    // Promise.all([getName(), getPhone()]).then((result) =>{
    //     console.log(result)
    // })
    
    async function getUser(){
        let name = await getName()
        console.log(phone)
        let phone = await getPhone()
        console.log(name)
    }
    
    getUser()
    ```