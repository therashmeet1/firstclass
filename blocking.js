let fs = require('fs')

let food= fs.readFileSync('food.txt', 'utf8')

console.log(food)
console.log('we ate this')

let drinks= fs.readFileSync('drinks.txt', 'utf8')
console.log(drinks)
console.log('we drank this')