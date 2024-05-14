
// Array
//              0        1        2        3
let names = ["sarika","poorva","sachin","virat"]
// retrive
console.log(names[0])
//update
names[0] = "poorva"
console.log(names[0])

// add
// push()
// unshift()
names.push("sachin")
names.unshift("abhishek")
console.log(names)

// delete 
names.pop()
names.shift()
console.log(names)
console.log(names)

//              0        1          2       3
let cities = ["pune","banglore","nagpur","wardha"]

// retrive
let q1 = cities[0]
console.log(q1)

// update 
cities[1] = "goa"
console.log(cities)

//push()
//unshift()
cities.push('kanpur')
cities.unshift('chandrapur')
console.log(cities)

//[ 'chandrapur', 'pune', 'goa', 'nagpur', 'wardha', 'kanpur' ]
cities.pop()
cities.shift()
console.log(cities)


// program 2
//              0         1        2       3
let fruits = ["apple","mango","banana","chikoo"]
console.log(fruits)

// type 
// Human 
// Properties - age , weight ,color
// Methods  - walk() ,talk()

// Vehicle
// Properties  - Color , ModelNumber , Type
// Methods - start() , stop()

// Bank acc 
// Properties  - bal , accNo , accType
// Methods - withdrawl() , deposit()

//          0        1       2        3
fruits = ["apple","mango","banana","chikoo"]
let q2 = fruits.length
console.log(q2)


// for loop 
//            0        1          2       3
let veg = ["carrot","brinjal","tomato","potato"]
console.log(veg[0])

for(let i = 0 ; i < 4 ; i++){ // 1 // 2 // 3 // 4
    //console.log(i) // 0 // 1 // 2 // 3
    console.log(veg[i])
}

//               0       1        2        3
let country = ["china","japan","india","srilanka"]
for(let i = 0 ; i < 4 ; i++){
    //console.log(i)
    console.log(country[i])
}

let i1 = 0
while(i1 < 4){
    console.log(country[i1])
    i1 = i1 + 1

}




// while 






















