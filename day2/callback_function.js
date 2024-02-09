// Normal function: passing an argument into the function
function hello(data){
    console.log(data)
}

hello("hi")

// callback function
function fun1(data){
    console.log(data)
}

function fun2(callbackfun){
    callbackfun("Milan Sony")
}

fun2(fun1)