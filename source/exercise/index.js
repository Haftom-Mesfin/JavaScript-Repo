// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "Haftom",
    chips: 100
}
let cards = [] // array
let sum = 0
    //to track the state of the black jack
let hasBlackJack = false;

// 1. Create a variable called isAlive and assign it to true
let isAlive = false;
// 2. Flip its value to false in the appropriate code block

// 1. Declare a variable called message and assign its value to an empty string
let message = "";
// 2. Reassign the message variable to the string we're logging out

// 1. Store the message-el paragraph in a variable called messageEl

let messageEl = document.getElementById("message-el")

// 2. Store the sum paragraph in a variable called sumEl
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el") // for an id use #, for a class selector use the .
    // 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")

// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")
    // 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + " : $" + player.chips
    // Make this function return a random number between 1 and 13
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    // if 1 == A    -> return 11 for simplicity
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        // if 11-13 == J, Q, K -> return 10
        return 10
    }

    return randomNumber
}

// Create a new function called startGame() that calls renderGame()
function startGame() {
    isAlive = true;
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    // 2. Use getRandomCard() to set the values of firstCard and secondCard
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum += firstCard + secondCard
    renderGame()
}

function renderGame() {
    // 3. Render the cards on the page using this format -> "Cards: 10 4"
    //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    // Create a for loop that renders out all the cards instead of just two
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}

function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        // 3. Use the getRandomCard() to set the value of card
        let card = getRandomCard()
            // 2. Add the new card to the sum variable
        sum += card
        cards.push(card)
            // 3. Call startGame()
        renderGame()
    }

}