let readline = require('readline-sync'); // Importing readline-sync using require()

// readline-sync is used to get user input from the terminal
let num1 = readline.question('Enter two numbers: ')
let num2 = readline.question('')

// console.log(num1, num2)

if(num1 > num2){
    console.log(num1, "is larger")
}else if(num1 === num2){
    console.log("Both number are same")
}else{
    console.log(num2, "is larger")
}