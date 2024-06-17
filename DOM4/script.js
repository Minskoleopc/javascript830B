let headOne = document.querySelector('h1')
let buttonOne = document.querySelector('button')

console.log(headOne)
console.log(buttonOne)

buttonOne.addEventListener('click',function(){
    headOne.style.color = "blue"
})