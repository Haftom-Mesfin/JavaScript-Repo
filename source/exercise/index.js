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

if (sum < 21) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true;
} else {
    message = "You're out of the game! 😭"
    isAlive = true;
}

//Cash out
console.log(hasBlackJack);
console.log(isAlive)
console.log(message)