// method inside object
const Person = {
    first_name: "Milan",
    last_name: "Sony",
    age: 22,
    state: "Kerala",
    fullname: function(){
        console.log(this.first_name + ' ' + this.last_name)
    }
}

// Adding new property into the object
Person.date_of_birth = "27/02/2001"

// Adding new method into the object
Person.place = function(){
    let place = "Chry"
    console.log(place)
    console.log(this.state)
}

console.log(Person)
console.log(Person.place())
console.log(Person.fullname())

// In JavaScript, the this keyword refers to an object.
