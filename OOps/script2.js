// program 1
// outside the class 

// class Person {
//     firstName = undefined
//     lastName = undefined

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol = new Person()
// let chinmay = new Person()

// console.log(amol.firstName)
// console.log(amol.lastName)

// // amol = {
// //     firstName:undefined,
// //     lastName:undefined
// // }

// amol.firstName = "amol"
// amol.lastName = "rao"

// chinmay.firstName = "chinmay"
// chinmay.lastName = "deshpande"

// chinmay.displayName()
// amol.displayName()


// program 2
// constructor 

// class PersonB {
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// let chinmay = new PersonB("chinmayB","DeshpandeB")
// let amol = new PersonB("amolB","raoB")

// console.log(chinmay)
// console.log(amol)

// program 3
// get and set method 
class PersonC {
    setFirstName(fn){
        this.firstName = fn
    }

    setLastName(ln){
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let amolC = new PersonC()
console.log(amolC)

amolC.setFirstName("amolC")
amolC.setLastName("raoC")
console.log(amolC)


// program 4 
// get and set keyword









// program 4
// using set and get keyword
