class PersonA {
    firstName = undefined
    lastName = undefined 
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let amol = new PersonA()
let chinmay = new PersonA()
console.log(amol)
console.log(chinmay)
amol.firstName = "amol"
amol.lastName = "rao"
console.log(amol)

// program 2

class  PersonB {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName+ this.lastName)
    }

}

let amolB = new PersonB("amolB","raoB")
amolB.displayName()

let chinmayB = new PersonB("chinmayB","deshpandeB")
chinmayB.displayName()

// program 3  get and set method 

class PersonC {
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
}

let chinmayC = new PersonC()
console.log(chinmayC)
chinmayC.setFirstName("chinmay")
chinmayC.setLastName("deshpande")
console.log(chinmayC)

// program 4 
// set and get keyword

let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}
info.firstName = "tanmay"
console.log(info)


// program 4
class PersonD {

    set firstN(fn){
        this.firstName = fn
    }

    set lastN(ln){
        this.lastName = ln
    }

    get firstN(){
        return this.firstName
    }

    get lastN(){
        return this.lastName
    }

}
let chinmayD = new PersonD()
chinmayD.firstN = "chinmay D"
chinmayD.lastN = "deshpande D"
console.log(chinmayD)

console.log(chinmayD.firstN)
console.log(chinmayD.lastN)

// program 5

class Bank {
    constructor(firstName, lastName,bal){
        this.firstName = firstName
        this.lastName = lastName
        this.bal = bal
        this.transactions = []
    }

    withdrawl(amt){
        if(this.bal > amt){
            this.bal = this.bal - amt
            this.transactions.push(-amt)
            return this.bal
        }
        else {
            console.log("insufficient balance")
        }
    }

    deposit(amt){
        this.bal = this.bal + amt
        this.transactions.push(amt)
        return this.bal
    }

    lastFiveTransactions(){
        return this.transactions.slice(-5)
    }

}

let amolBa = new Bank("amolB","raoB",10000) 
amolBa.withdrawl(500)
amolBa.deposit(500)
amolBa.deposit(500)
amolBa.withdrawl(500)
amolBa.deposit(50)
amolBa.deposit(100)
amolBa.withdrawl(400)
amolBa.deposit(300)
console.log(amolBa.transactions)
console.log(amolBa.lastFiveTransactions())

