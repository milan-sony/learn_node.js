function longTask(milliSecondTime){
    let dt = new Date()
    while((new Date() - dt <= milliSecondTime)){

    }
}

console.log("Started")
longTask(2000)
console.log("End")

console.log("Started")
longTask(2000)
console.log("End")

console.log("Started")
longTask(2000)
console.log("End")