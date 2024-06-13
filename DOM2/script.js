//<p id = "one" class = "two" name = "nm">para</p>

// selecting the element 

// CSS

//tagName 

let para = document.querySelector('p')
console.log(para)

//byId
let byId = document.querySelector('#onee')
console.log(byId)

//className
let byClassName = document.querySelector(".two")
console.log(byClassName)

//attribute
//tagName[attribute= "value"]
let byAtt = document.querySelector('p[name = "nm"]')
console.log(byAtt)

// based on user action , alter properties and attributes