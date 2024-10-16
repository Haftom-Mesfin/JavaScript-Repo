let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
//to track the state of the black jack
let hasBlackJack = false;

// 1. Create a variable called isAlive and assign it to true
let isAlive = true;
// 2. Flip its value to false in the appropriate code block

// 1. Declare a variable called message and assign its value to an empty string
let message = "";
// 2. Reassign the message variable to the string we're logging out

// 1. Store the message-el paragraph in a variable called messageEl

let messageEl = document.getElementById("message-el")

// 2. Store the sum paragraph in a variable called sumEl
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el") // for an id use #, for a class selector use the .

function startGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = true;
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message;

}