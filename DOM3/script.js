// javascript

// <h1 id = "one" class = "two" name = "nm">Hello</h1>  
// Css selector

// byTagname
let byTagName = document.querySelector('h1')
console.log(byTagName)

// byClassName
let byClassName  = document.querySelector('.two')
console.log(byClassName)

// byId
let byId = document.querySelector('#one')
console.log(byId)

// byAttribute
// tagName[attr="value"]

let byName = document.querySelector('h1[name = "nm"]')
console.log(byName)

byName.addEventListener('click',function(){
    byName.style.color = 'red'
    byName.style.backgroundColor = 'yellow'
})


let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    }
}
info.parent.mother = "kanchan s deshpande"