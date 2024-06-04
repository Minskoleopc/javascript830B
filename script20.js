let firstName = "chinmay"
let lastName = 'deshpande'
let middleName = `shirish`

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof middleName)

// program 2
let names = ["chinmay","shirish","poorva"]
names[0] = "mayuri"
console.log(names)

// program 3
// string stores the value index
// let city = "pune"
// // 0   1   2    3
// // p   u   n    e
// console.log(city[0])
// city[0] = "c"
// console.log(city)


// program 4

let city = "nagpur"
// 0   1    2    3   4   5
// n   a    g    p   u   r

// for loop 

for(let i = 0 ; i < city.length ; i++){
    //console.log(i)
    console.log(city[i])
}


// while
let i2 = 0 
while(i2 < city.length){
    console.log(city[i2])
    i2 = i2 + 1
}

let city2 = "mumbai"
for(let i = city2.length-1 ;i >= 0 ; i--){
    console.log(city2[i])
}

// program 5

let fn =  "chinmay" 
let count = 0
for(let i = 0 ; i < fn.length ; i++){
    //console.log(i)
    //console.log(fn[i])
    if(fn[i] == "i" || fn[i] == "o" || fn[i] == "e" || fn[i] == "u" || fn[i] == "a"){
        count = count + 1
    }
}
console.log(count)

// program 6

let city3 = "pune"
// "enup" 
let rev = ""
for(let i = 0 ; i < city3.length ; i++){
    //console.log(city3[i])
    rev = city3[i] + rev
    //       p     + ""  ---> p
    //       u     + u   ----> up
    //       n     + up  -----> nup 
    //       e     + nup  -----> enup
}
console.log(rev)















