let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:34,
        rollNo:45
    },
    {
        
        firstName:"sarika",
        lastName:"pansare",
        age:23,
        rollNo:23

    },
    {
        firstName:"shraddha",
        lastName:"pote",
        age:25,
        rollNo:23

    },
    {
        firstName:"amol",
        lastName:"rao",
        age:32,
        rollNo:66
    }

]
// printing firstName and lastName
students.forEach(function(el,index,arr){
    console.log(el.firstName + " "+ el.lastName)
})

// printing name of people above 30
// program 2
students.forEach(function(el){
    if(el.age > 30){
        console.log(el.firstName + el.lastName)
    }
})
// program 3
// add property to the object coutry:"india" to every object
students.forEach(function(el){
    el.country = "india"
})
console.log(students)

// program 4
//skills:["python"]
students.forEach(function(el){
    el.skills = ["python"]
})
console.log(students)

students.forEach(function(el){
    el.skills.push("html")
})
console.log(students)

















