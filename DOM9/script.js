let h = document.querySelector('#one')
console.log(h)
let bdy = document.querySelector('body')
// <button id = "one" class = "two" name = "nm">AddButton</button>

bdy.addEventListener('click',function(e){
    //console.log(e.target)
    //console.log(e.target.tagName)
    console.log(e.target.className)
})