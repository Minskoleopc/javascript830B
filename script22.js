// let firstName = "Chinmay"
// let a = firstName.toUpperCase()
// console.log(a)

// let b = firstName.toLowerCase()
// console.log(b)


// // Method chaining
// let city = "Pune"
// let c = city.toUpperCase().toLowerCase().length
//  //"PUNE" --------> "pune" ------ 4
// console.log(c)

// // program 4

// let fruits = "apple mango banana chikoo grapes"
// let d = fruits.includes('k')
// let e = fruits.includes('Chi')
// console.log(d)
// console.log(e)

// //program 5
// let city2 = "mumbai"
// // 0   1    2   3   4    5
// // m   u    m   b   a    i

// let f = city2.indexOf("b")
// let g = city2.indexOf("B")
// console.log(f)

// // program 6

// let city3 = "chandrapur"
// // 0     1      2     3      4     5     6     7    8     9
// // c     h      a     n      d     r     a     p    u     r   
// //-10   -9     -8    -7    -6     -5    -4     -3   -2   -1
// //city3.slice(startIndex,EndIndex(not included))
// console.log(city3.slice(0))
// console.log(city3.slice(0,6))
// console.log(city3.slice(0,10))
// console.log(city3.slice(1,-2))
// console.log(city3.slice(-8,-3))
// console.log(city3.slice(-9,8))
// console.log(city3.slice(-1,-3))

// // program 7
// let e1 = "I am learning javascript and playwright ......" 
// let e2 = e1.replace("javascript","cypress")
// console.log(e2)

// // next class monday 8:30 pm

// let infoe = "I am learning javascript"
// let a1 = infoe.concat(" and python")
// console.log(a1)
// console.log(infoe)


// // revOne = ["chinmay","shirish","sam","sham"]
// // let r = revOne.reverse()
// // console.log(revOne)
// // console.log(r)

// // let s = revOne.sort()
// // console.log(s)
// // console.log(r)

// // program 2

// let run =  "chinmay shirish deshpande"
// let lst = run.split(' ')
// let lstB = run.split('a')
// //["chinm","y shirish deshp","nde"]

// //["chinmay,shirish,deshpande"]
// console.log(lst)
// console.log(lstB)

// program 3

let fn2 = "ninad dani";
let q11 = fn2.startsWith("n")
let q112 = fn2.startsWith("nin")
let q113 = fn2.startsWith("Nin")

console.log(q11)
console.log(q112)
let q114 = fn2.endsWith("i")
let q115 = fn2.endsWith('Ni')

console.log(q114)
console.log(q115)

console.log(typeof q114)


// program 4

let n = " goa "
// console.log(n.length) //5
// n = n.trimStart()
// console.log(n.length)

// n = n.trimEnd()
// console.log(n.length)
let m = " goa "
m = m.trim()
console.log(m.length)

// program 5
//  0  1  2  3  4  5  6
//  c  h  i  n  m  a  y
let na = "chinmay"
let ma = na.charAt(4)
console.log(ma)

// ASCII
let maa = na.charCodeAt(6)
console.log(maa)
















