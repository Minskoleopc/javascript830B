let ulList = document.querySelector('ul')
let addButton = document.querySelector('#one')
let inputText = document.querySelector('input')

addButton.addEventListener('click', function () {
    let text = inputText.value
    let newList = document.createElement('li') // <li></li> 
    newList.textContent = text // <li>Papaya</li>
    createButtons(newList)
    ulList.appendChild(newList)
    inputText.value = ""
})

ulList.addEventListener('click', function (event) {
    // console.log(event.target)
    // console.log(event.target.tagName)
    // console.log(event.target.className)

    if (event.target.tagName === "BUTTON") {

        if (event.target.className === "remove") {
            let li = event.target.parentElement
            let ulList = li.parentElement
            ulList.removeChild(li)

        }
        if (event.target.className === "up") {
            let li = event.target.parentElement
            let ulList = li.parentElement
            let prevE = li.previousElementSibling
            if (prevE) {
                ulList.insertBefore(li, prevE)
            }
        }
        if (event.target.className === "down") {
            let li = event.target.parentElement
            let ulList = li.parentElement
            let nextE = li.nextElementSibling
            if (nextE) {
                ulList.insertBefore(nextE, li)

            }
        }

    }

})


function createButtons(li) {
    let r = document.createElement("button") // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.classList.add('remove') // <button class = "remove">Remove</button>
    li.appendChild(r)

    let u = document.createElement("button")
    u.textContent = "Up"
    u.classList.add("up")
    li.appendChild(u)


    let d = document.createElement("button")
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)

}