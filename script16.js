let info = ["chinmay","deshpande",7709192441,34,55]
console.log(info)

// retrive
console.log(info[0])
// update
info[0] = "snehal"
console.log(info)
// add 
info.push("pune")
info.unshift("Mr")

// delete
info.pop()
info.shift()


// program 2


info2 = ["amol",'rao','pune',23,45]

info2 = {
    //"key":value
    //"property:value"
    firstName:"amol",
    lastName:"rao",
    city:"pune",
    age:23,
    rollNo:45
}

// object stores the value by index???
//console.log(info2[0])

// retrive 
// dot notation and bracket notation
console.log(info2.firstName)
console.log(info2['firstName'])
// update
// dot notation and bracket notation
info2.firstName = "snehal"
info2['age'] = 34
console.log(info2)

// add 
// dot notation and bracket notation
info2.language = "marathi"
info2['country'] = "india"
console.log(info2)

// delete
// dot notation and bracket notation
delete info2.firstName
delete info2['firstName']


let vehicle  ={
    color:"red",
    type:"sedane"
}

console.log(vehicle.color)
vehicle.color = "green"
vehicle.regNo = 124
delete vehicle.color



