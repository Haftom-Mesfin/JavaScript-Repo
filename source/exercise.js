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


//-------------------------------------
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age >= 21) {
    console.log("Welcome! You can enter the club!")
} else {
    console.log("Sorry, You can not enter the club!")
}

//--------------------------------------

// Check if the person is elegible for a birthday card from the King! (100)

let personAge = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (personAge < 100) {
    console.log("Not elegible")
} else if (personAge === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}


//

let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

//let str = "";
for (let i = 0; i < sentence.length; i++) {
    //str += sentence[i];
    greetingEl.textContent += sentence[i] + " "
}
//greetingEl.textContent = str