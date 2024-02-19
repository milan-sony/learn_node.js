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

add(10, 20, (sum, err) =>{
    if(err){
        console.log("First number is ZERO")
    }else{
        console.log(sum)
        multiply(sum, sum, (product) =>{
            console.log(product)
            div(product, 10, (result) =>{
                console.log(result)
            })
        })
    }
})