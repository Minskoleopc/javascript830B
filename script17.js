// array

// reverse()

let names = ["chinmay","amit","shirish","raj","ramesh"]
// let q = names.reverse()
// console.log(q)
// console.log(names)

let names2 = names.sort()
console.log(names2)

// join()

let info = ["chinmay","shirish",7709192441]
let e = info.join("@")
console.log(e)

// contact()
let a = [55,66,77]
let b = [22,33,44]
let c = b.concat(a)
console.log(c)

// slice()
//              0       1         2          3         4        5
let cities = ["pune","mumbai","banglore","kolkata",'chennai',"nagpur"]
//             -6      -5        -4         -3         -2         -1
//cities.slice(startIndex,endIndex(not included))
console.log(cities.slice(1,5))
console.log(cities.slice(0))
console.log(cities.slice(-6))
console.log(cities.slice(1,-2))
console.log(cities.slice(-5,5))
console.log(cities.slice(-1,-5))

// splice()
//              0       1          2         3
let citiesB = ["pune","mumbai","banglore","kolkata"]
// citiesB.pop()
// citiesB.shift()
// citiesB.splice(2,1)
// console.log(citiesB)
citiesB.splice(1,2,"wardha","indore")
console.log(citiesB)

// flat()
//               0         1      2
//              0  1    0   1    0  1
let numbers = [[11,22],[33,44],[55,66]]
console.log(numbers[0][0])
console.log(numbers[1][0])
console.log(numbers[2][1])
let q1 = numbers.flat()
console.log(q1)


//fill()