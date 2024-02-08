function hi(num1, num2){
    console.log(num1 + num2)
}

hi(10, 20)

// Default parameter
function hello(num1 = 100, num2){
    console.log(num1 + num2)
}

hello(10, 20)
hello(undefined, 20)