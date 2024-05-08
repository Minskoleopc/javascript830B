// one input and multiple outcomes
// numT > 0  && numT <= 5   -------> 10 % discount
// numT > 5  && numT <= 10  -------> 20 % discount 
// numT > 10                -------> 30 % discount

let numT = 7

if(numT > 0 && numT <= 5){
    console.log("10 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("20 % discount")
}
if(numT >10){
    console.log("30 % discount")
}

// program 2

// let numT2  = -17

// if(numT2 > 0 && numT2 <= 5){
//     console.log("10 % discount")
// }
// else if(numT2 > 5 && numT <= 10){
//     console.log("20 % discount")
// }
// else if(numT2 > 10){
//     console.log("30 % discount")
// }
// else {
//     console.log("incorrect input")
// }

// program 3

let marks = 92

if(marks > 90){
    console.log("Grade A")
}
if(marks >= 75){
    console.log("Grade B")
}
if(marks >= 65){
    console.log("Grade C")
}

let marksB = 50
if(marksB > 90){
    console.log("Grade A")
}
else if(marksB >= 75){
    console.log("Grade B")
}
else if(marksB >= 65){
    console.log("Grade C")
}
else {
    console.log("Please try again")
}

// program 5

let x = 10 
let y  = 15

if(x > y){
    console.log("x is greater")
}
else {
    console.log("y is greater")
}

// program 6

let x1 = 10
let x2 = 70
let x3 = 400

if(x1 > x2 && x1 > x3){
    console.log("x1 is greater")
}
else if(x2 > x3 && x2 > x1){
    console.log("x2 is greater")
}
else {
    console.log("x3 is greater")
}








