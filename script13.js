// POM -- framework 

// Design pattern 

// User defined data type ???

// Class 
// 1)Encapsulation 2) Inheritance 3) Polymorphism 4) Abstraction
// Encapsulation 
// Inheritance 
// Polymmorphsim - overloading overriding 
// overloading --- same class , same method name different signature \
// overriding  -- different class same method name and same signature


// Oops

// Class defined

// Data type -----> string , boolean , array , number , object , map , set dom
// User defined data ------>  class defined  --------objects 
// Objects ------> properties and methods 

// Oops 
//1)Encapsulation 
//2)Inhertitance 
//3)Polymorphism
//4)Abstraction

// program 1

// class Student {
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }

//     displayName(){
//        console.log(this.firstName + this.lastName) 
//     }
// }
// let amol = new Student("chinmay","deshpande")
// console.log(amol.firstName)
// console.log(amol.lastName)

// program 2

// class Teacher {
//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName  = ln
//     }
//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// class Student extends Teacher {
//     constructor(fn,ln,spec){
//         super(fn,ln)
//         self.specialization = spec
//     }
//     displaySpec(){
//         console.log(this.specialization)
//     }

// }

// let amol = new Student("amol","rao","salary")
// amol.displayName()
// amol.displaySpec()
// console.log(amol.firstName)
// console.log(amol.lastName)

// polymorphism 

// class Calculator {

//     addition(a,b,c,d){

//         if(a != undefined && b != undefined && c != undefined && d != undefined){
//             console.log(a+b+c+d)
//         }
//         else if(a != undefined && b != undefined && c != undefined){
//             console.log(a+b+c)
//         }
//         else if(a != undefined && b != undefined){
//             console.log(a+b)
//         }

//     }

// }

// let cal = new Calculator()
// cal.add(12,4)
// cal.add(12,4,3)
// cal.add(12,4,3,3)


// program 4
// overriding
class WorldBank {
    save(){
        console.log("save")
    }
    loan(){
        console.log("loan")
    }
}

class SBI  extends WorldBank{
    save(){
        console.log("save SBI")
    }
    loan(){
        console.log("loan SBI")
    }
}


let SBI = new WorldBank()
SBI.loan()
















