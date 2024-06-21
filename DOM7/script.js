let ulList = document.querySelector('ul')
let button = document.querySelector('button')
let inputText = document.querySelector('input')

button.addEventListener('click',function(){
    // reading the input text
    let txt = inputText.value //"papaya"
    // create the li element
    let newList = document.createElement('li') // <li></li>
    // add the text to li element
    newList.textContent = txt // <li>papaya</li>
    // append the newLi to ul list
    ulList.appendChild(newList)

    inputText.value = ""

})