//<h1 id = "one" class = "two" name = "nm">Heading One</h1>

let headOne = document.querySelector('h1')
let className = document.querySelector('.two')
let nameOne = document.querySelector('h1[name = "nm"]')

console.log(headOne)
console.log(className)
console.log(nameOne)

let firstE = document.querySelector('.fr')
console.log(firstE)

// To find the multiple elements 
let nodeListOfFruits  = document.querySelectorAll('.fr')
console.log(nodeListOfFruits) // similar to arr

// program 1
let buttonA = document.querySelector('#clk')
// for(let i = 0 ; i < nodeListOfFruits.length; i++){
//     //console.log(nodeListOfFruits[i])
//     if( i % 2 == 0){
//         nodeListOfFruits[i].style.color = "green" 
//     }
//     else {
//         nodeListOfFruits[i].style.color = "red" 
//     }
// }
// buttonA.addEventListener('click',function(){
//     for(let i = 0 ; i < nodeListOfFruits.length; i++){
//         //console.log(nodeListOfFruits[i])
//         if( i % 2 == 0){
//             nodeListOfFruits[i].style.color = "green" 
//         }
//         else {
//             nodeListOfFruits[i].style.color = "red" 
//         }
//     }
// })


// program 2
let elementsLi = document.querySelectorAll('li')
console.log(elementsLi)

// program3 

let veg = document.querySelector('#vegetables')
console.log(veg)

let veg2 = document.getElementById('vegetables')
console.log(veg2)

// program 3
let nodeE = document.querySelectorAll('.veg') // nodeList
console.log(nodeE)
let htmlC = document.getElementsByClassName('veg') // htmlCollection
console.log(htmlC)

// program 4

let allLiELementN = document.querySelectorAll('li') // nodeList
let allLiELementH  = document.getElementsByTagName('li') // htmlCollection
console.log(allLiELementN)
console.log(allLiELementH)


