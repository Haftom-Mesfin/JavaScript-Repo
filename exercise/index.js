// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let min = 2
let max = 11
let firstCard = Math.floor(Math.random() * (max - min + 1)) + min
let secondtCard = Math.floor(Math.random() * (max - min + 1)) + min
console.log("First number is : " + firstCard)
console.log("Second number is : " + secondtCard)
    // 2. Create a variable, sum, and set it to the sum of the two cards

let sum = firstCard + secondtCard

console.log("Sum is : " + sum)