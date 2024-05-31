let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:44
}
//dot notation and bracket notation

// console.log(info['firstName'])
// info['lastName'] = "deshpande"
// info['city']= 'pune'
// delete info['age'] 

// // program 2

// console.log(info.firstName)
// info.firstName = "chinmay"
// info.language = "marathi"
// delete info.rollNo


// program 3 
let names  = ["chinmay","shirish","ravi","rajesh"]

for(let i = 0 ; i < names.length ; i++){
    console.log(names[i])
}

let info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    rollNo:34
}
// dot notation does not work inside loop
for(let key in info2 ){
    console.log(key,info2[key])
}

// program 4

let vehicle = {
    color:"red",
    type:"sedane"
}

for(let key in vehicle){
    console.log(key,vehicle[key])
}

// program 5


let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande"
    },
    {
        firstName:"sarika",
        lastName:"pansare"
    },
    {
        firstName:"komal",
        lastName:'deshmukh'
    }
]
//console.log(students[0].lastName)
for(let i = 0 ; i < students.length ; i++){
    console.log(students[i].firstName +" "+students[i].lastName)
}

//program 6
for(let i = 0 ; i < students.length ; i++){
    students[i].language = "hindi"
}
console.log(students)

// program 7
let info3 = {
    firstName:"chinmay",
    lastName:"deshpande",
    parent:{
        mother:"kanchan deshpande",
        lastName:"shirish deshpande"
    }
}

info3.parent.mother = "kanchan s deshpande"
console.log(info3)

info3.parent.sister = "gauri s deshpande"
console.log(info3)


















