let fs = require('fs')

let food= fs.readFile('food.txt', 'utf8', (err, food)=>{
    console.log(food)

})
console.log('we ate this')



let drinks= fs.readFile('drinks.txt', 'utf8', (err, drinks)=>{
    console.log(drinks)

})
console.log('we drank this')