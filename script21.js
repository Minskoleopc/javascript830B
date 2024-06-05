//  string contact 

// string + string  -------> string 
// string + number  -------> string 
// number + string  -------> string 
// number + number  -------> number


let a  = 10
let b = 5
let c = "hello"

console.log(a + b + c)

// number + number  + string
        //number  + string
          //  string
          // 15hello

console.log(c + a + b)
// string + number + number
        //string + number    
            // string

console.log(a+c+b)

// program 2
let firstName = "chinmay"
let lastName = "deshpande"
console.log('My firstName is '+firstName+' and my lastName is '+lastName)
console.log(`My firstName is ${firstName} My lastName is ${lastName}`)

console.log(typeof 9)
console.log(typeof '9')
console.log(`${8+8}`)


// Methods and Properties 
// Object  ---- properties and methods 

// gym --- 
// action - excercise
// return - health



let fn = "chinmay"
console.log(fn)
console.log(typeof fn)
console.log(fn.length)




// toUpperCase()
let ln = "deshpande"
let ll = ln.toUpperCase()
console.log(ll)

// toLowerCase()
let lln = "Chinmay"
let q2 = lln.toLowerCase()
console.log(q2)
// includes(
let fruits = "apple"
let a1 = fruits.includes('a')
let a2 = fruits.includes('app')
let a3 = fruits.includes('App')


console.log(a1)
console.log(a2)
console.log(a3)


// indexOf()
let city = "pune"

// 0  1  2  3 
// p  u  n  e

let r1 = city.indexOf("p")
let r2 = city.indexOf("P")
console.log(r1)
console.log(r2)


// replace()

let learning = "I am learning js"
let s1 = learning.replace('js',"python")
console.log(s1)







