// //                0     1    2   3
// let birthYear = [1999,2000,2001,2002]
// // [25,24,23,22]
// let ages = [] // [25]

// for(let i = 0 ; i < 4; i++){
//     //console.log(i)
//     //console.log(birthYear[i])
//     //console.log(2024 - birthYear[i])
//     let a = 2024 - birthYear[i]
//     ages.push(a)
// }
// console.log(ages)


// let birthYear = [1989,1990,1991,1992]
// let ages = []
// //[35,34,33,32]

// for(let i = 0 ; i < birthYear.length ; i++){
//     //console.log(i)
//     //console.log(birthYear[i])
//     //console.log(2024 - birthYear[i])
//     let b = 2024 - birthYear[i]
//     ages.push(b)
// }
// console.log(ages)


// program 2

let marks = [77,55,66,77,88]
let aboveE75 = []
//[77,77,88]

for(let i = 0 ; i < marks.length ; i++){
    // console.log(i)
    // console.log(marks[i])
    if(marks[i] >= 75){
        aboveE75.push(marks[i])
    }
}
console.log(aboveE75)

// program 3

let cities = ["pune","mumbai","nagpur"]
for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    //console.log(cities[i])
    console.log("welcome "+cities[i])
}

// program 4

let numbers = [11,22,33]
// 66
let total = 0

for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    //console.log(numbers[i])

    total = total + numbers[i]
    //       0    +     11   // 11
    //       11   +     22   // 33
    //       33   +     33   // 66
}
console.log(total)




