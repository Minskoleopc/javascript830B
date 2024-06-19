let headOne = document.querySelector('h1')
let buttonTwo = document.querySelector('button')
//  <h1 id = "one" class = "two" name = "nm">Chinmay</h1>

console.log(headOne.textContent)
buttonTwo.addEventListener('click',function(){
    headOne.textContent =  headOne.textContent.toUpperCase()
})


// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// info.firstName = "chinmay s"