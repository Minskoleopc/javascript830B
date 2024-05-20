//                0     1   2    3
let birthYear = [1989,1990,1991,1992]
let ages = []
//[35,34,33,32]

for(let i = 0 ; i < birthYear.length ; i++){
    // console.log(i)
    //console.log(birthYear[i])
    //console.log(2024- birthYear[i])
    let a = 2024- birthYear[i]
    ages.push(a)
}
console.log(ages)


birthYear = [1989,1990,1991,1992]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2024 - el
})
console.log(q1)

// program 2
let numbers = [11,22,33,44]
//[13,24,35,46]
let q2 = numbers.map(function(el,index,arr){
    return  el + 2
})
console.log(q2)

// program 3

let numbersB = [55,66,77,33,44,55,66]
let above50 = [] // [55,66,77]

for(let i = 0 ; i < numbersB.length ; i++){
    console.log(i)
    console.log(numbersB[i])
    if(numbersB[i] > 50){
        above50.push(numbersB[i])
    }
}
console.log(above50)

numbersB = [55,66,77,33,44,55,66]
let q22 = numbersB.filter(function(el,index,arr){
    return el > 50
})
console.log(q22)


let numberC = [11,33,44,55,22,33,55,66,77]
let q33 = numberC.filter(function(el,index,arr){
        return el % 2 == 0
})
console.log(q33)

// program 3

let numbersC  = [11,22,33]
let total  = 0

for(let i = 0 ; i < numbersC.length ; i++){
    //console.log(i)
    //console.log(numbersC[i])
    total = total + numbersC[i]
    //        0   +      11   =====> 11
    //        11  +      22   =====> 33
    //        33  +      33   =====> 66
}
console.log(total)

// reduce
