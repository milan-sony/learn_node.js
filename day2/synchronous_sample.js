let dt = new Date()

console.log("Loop started")
for(i=0; i<=100; i++){
    console.log("Looping")
}
console.log("Loop ends")

let newDt = new Date() - dt
console.log("Diff: " + newDt)