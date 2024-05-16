
//push()
//              0         1         2         3
let names = ["chinmay","shirish","rajesh","satish"]

// action 
// return 
// Gym 
// Excercise
// Health

let q1 = names.push("sanjay")
console.log(q1)
console.log(names)


//unshift()
//               0       1        2      3
let fruits = ["apple","mango","banana","oranges"]
console.log(fruits)
let q2 = fruits.unshift("papaya")
console.log(q2)
console.log(fruits)

//pop()

let vegetables = ["carrot","brinjal","cabbage","cauliflower"]
let q3 = vegetables.pop()
console.log(q3)
console.log(vegetables)

//shift()

let city = ["pune","nagpur","bangalore","chennai"]
let q4 = city.shift()
console.log(q4)
console.log(city)

// push() , pop() , unshift() , shift()

// includes
//               0        1           2         3
let country = ["india","pakistan","srilanka","china"] 
let q5  = country.includes("india")
console.log(q5)
let q6 = country.includes('India')
console.log(q6)



//reverse()
country = ["india","pakistan","srilanka","china"] 
let q7 = country.reverse()
console.log(q7)

// concat()
let arr = [11,22,33]
let arr2  = [44,55,66]
let arr3 = arr.concat(arr2)
console.log(arr3)

// join()

let info = ["chinmay","deshpande",7709192441]
let q8 = info.join(" ") // chinmay-deshpande-7709192441
console.log(q8)

// at()
//           0         1            2         3
country = ["india","pakistan","srilanka","china"] 
let q9 = country.at(2)
console.log(q9)

// indexOf()
//         0   1  2  3  4
let q22 = [22,33,44,55,66]
let q10 = q22.indexOf(33)
console.log(q10)
