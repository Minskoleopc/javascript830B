class Person {
    firstName = "chinmay"
    lastName = "deshpande"
    age = 34

    walk(){
        console.log("I am walking")
    }
    talk(){
        console.log("i am talking")
    }
}

let amol = new Person()
let chinmay = new Person()

console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.age)
amol.age =  44
console.log(chinmay.age)
console.log(amol.age)

class Person {
    
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    display(){
        console.log(this.firstName + this.lastName)
    }
}

let chinmay2 = new Person("chinmay","deshpande")
let amol2 = new Person("amol2","rao2")

console.log(amol2.firstName)
console.log(amol2.lastName)

console.log(chinmay2.firstName)
console.log(chinmay2.lastName)

chinmay2.firstName()
chinmay2.lastName()

// friday - 7:30 am