let button = document.querySelector('button')
let headOne = document.querySelector('h1')
let inputText = document.querySelector('input')

console.log(button)
console.log(headOne)
console.log(inputText)

//JS ----- object ---- properties and methods
button.addEventListener('click',function(){
    let color = inputText.value
    headOne.style.color = color
    inputText.value = ""
})