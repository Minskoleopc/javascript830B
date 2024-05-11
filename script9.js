// loops


// for(intialization ; conditionCheck ; increment/Decrement){
//     // statements
// }

// for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
//     console.log(i) // 1 // 2 // 3 // 4 // 5
// }
// for(let i = 2 ; i <=  20 ; i = i+2){
//     console.log(i)
// }
// for(let i= 50 ; i >= 5 ; i = i - 5){
//     console.log(i)
// }
// for(let i = 1 ; i <= 3 ; i++){
//     console.log("hello")
// }
// for(let i = 1 ; i <= 3 ; i++){
//     console.log(i)
// }


// program 2

// 1 2 3 4 5
// 1 2 - break


for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    console.log(i) // 1 // 2 // 3
    if(i == 3){
        break
    }
}

for(let i = 1 ; i <= 5 ; i++){ // 2 //3
    if(i == 3){
        break
    }
    console.log(i) // 1 // 2
}

for(let i = 5 ; i >= 1; i--){ // 4 //3
    if(i == 3){
        break
    }
    console.log(i) // 5 // 4
}   


for(let i = 20 ; i >= 2 ; i = i-2){ // 18 // 16 // 14 // 12 // 10
    if(i == 10){
        break
    }
    console.log(i) // 20 // 18 // 16 // 14 // 12
}

// continue with for 

for(let  i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    if (i == 3){
        continue
    }
    console.log(i) // 1 // 2 // 4 // 5
}
