let addButton = document.querySelector('#addButton')
let inputElement = document.querySelector('input')
let ulList  = document.querySelector('ul')

addButton.addEventListener('click',function(){
    let text = inputElement.value // "apple"
    let newLi = document.createElement('li')// <li></li>
    newLi.textContent = text // <li>apple</li>
    ulList.appendChild(newLi)
    createButton(newLi)
    inputElement.value = ""

})

function createButton(li){
    let rm= document.createElement('button') // <button></button>
    rm.classList.add('remove') //<button class = "remove"></button>
    rm.textContent = "Remove" // <button class = "remove">Remove<button>
    li.appendChild(rm)
 
    let up = document.createElement('button') // <button></button>
    up.classList.add('up') //<button class = "up"></button>
    up.textContent = "Up" // <button class = "up">Up<button>
    li.appendChild(up)

    let down= document.createElement('button') // <button></button>
    down.classList.add('down') //<button class = "down"></button>
    down.textContent = "Down" // <button class = "down">Down<button>
    li.appendChild(down)

}