// js 

//<h1 id = "one" class = "two" name = "nm">hello</h1>
// elementOne 
// js use
// to create element  // document.create('hello')
// to update element  // elementOne.textContent = "hello2"
// to retrive element // document.querySelector("h1")
// to delete element // removeChild()

// attribute update,add,retrive ,delete

// attribute update
// attribute add
// attribute remove
// attribute retrive

// <h1 id = "one" class = "two" name ="nm">hello</h1>
let headOne = document.querySelector('.two')
// retrive
console.log(headOne.className)
headOne.className = "three"

headOne.classList.add('four')
headOne.classList.remove('three')
headOne.classList.toggle("three")

// delete
// headOne.removeAttribute('id')
// console.log(headOne)

let text = headOne.getAttribute('id')
console.log(text)

headOne.setAttribute('data-cy',"cypressB")
console.log(headOne)