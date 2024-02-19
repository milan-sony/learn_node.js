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