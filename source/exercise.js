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

let sentence = ["Hello ", "my ", "name ", "is ", "Haftom"]
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

//let str = "";
for (let i = 0; i < sentence.length; i++) {
    //str += sentence[i];
    greetingEl.textContent += sentence[i] + " "
}
//greetingEl.textContent = str
//--------------------------------------------------
// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name: "Haftom",
    age: 40,
    country: "USA"
}

function logData() {
    let personData = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(personData)
}

logData()

// SPREAD and its uses -> to copy elements rather than to mututate them, we it in React
const nums = [9, 3, 2, 8]
console.log(Math.max(nums)) //Nan
    //Use SPREA
console.log(Math.max(...nums)) //9
console.log(Math.min(...nums)) //2
let array = [...nums]
console.log(array) //[9, 3, 2, 8]

console.log(...nums) //9 3 2 8
console.log(...[9, 3, 2, 8]) //{0:9, 1:3, 2:2, 8:3}

console.log(...
        "hello") //h e l l 0

const cats = ["blue", 'scout', 'kitty']
const dogs = ["rocket", 'rusty', 'wyatt']

const pets = [...cats, ...dogs] // ['blue', 'scout', 'kitty', 'rocket', 'rusty', 'wyatt']
console.log(pets)

const feline = {
    legs: 4,
    family: "felidae"
}

const canline = {
        family: "canlae",
        furry: "true"
    }
    //SPREAD with objects
const dog = {...canline, isPet: true }
console.log(dog) // {family : "canlae", furry : "true", isPet : true}
const line = {...feline, genus: "panthera" }
console.log(line) //{legs: 4,family: "felidae", genus: "panthera"}
const catDog = {...feline, ...canline }
console.log(catDog) // {legs: 4, family: "canlae", furry: "true"} // we got two family keys but value is updated

//REST - collects all remaining arguments into an actual array

function sumAll(...elements) {
    let total = 0;
    for (let element of elements) {
        total += element;
    }
    return total;
}
console.log(sumAll(1, 2)) // 3
console.log(sumAll()) //0
console.log(sumAll(1, 2, 3, 4, 5, 6)) // 21

function totalSum(...numbers) {
    return numbers.reduce((total, number) => total + number)
}
console.log(totalSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) //55

//DESTRUCTURING -> unpack values from arrays, properties from objecs into distinct variables
//We can destructure arrays, objects abd params
//array
const scores = [100, 90, 70, 60]
const [gold, silver, ...everyOneElse] = scores // order matters
console.log(gold) // 100
console.log(silver) //90
console.log(everyOneElse) //[70, 60]
let goldSilver = gold + silver
console.log(goldSilver) //190
    //object
const user = {
    email: " user.email@gmail.com",
    password: "hjfhlaidyfggh",
    born: 1999,
    firstName: "user",
    lastName: "Gebre"
}

const { email, firstName, lastName, password } = user // unlike array order doesn't matter
console.log(email) //user.email@gmail.com
console.log(password) //hjfhlaidyfggh
const { born: birthDate } = user // rename born by birthDate
//console.log(born) // ReferenceError
console.log(birthDate) //1999