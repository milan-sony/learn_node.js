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

add(0, 20).then((sum) =>{
    console.log(sum)
}).catch((err) =>{
    console.log(err)
})