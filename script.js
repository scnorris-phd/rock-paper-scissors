/*
Get the user's choice via a prompt.
Run a string method to convert the user's choice to lowercase.
Run an if else or switch statement that converts the user's choice to a number between 1 and 3 inclusive.
Run a function that generates a random number between 1 and 3 as the computer's choice.
Run an if else or switch statement that compares the user's and computer's choice and returns a result string.
Repeat the above until one player wins three times and return a game over message.
*/

function capitalizeFirstLetter(text) {
    let textLower = text.toLowerCase();
    let textUpperFirst = textLower.toUpperCase().charAt(0) + textLower.slice(1);
    return textUpperFirst;
}

let playerName = prompt('Let\'s play Rock Paper Scissors! Please enter your name.');
let playerNameCap = capitalizeFirstLetter(playerName);
let playerChoiceInitial = prompt('Enter your choice.');
let playerSelection = capitalizeFirstLetter(playerChoiceInitial);

/* First pass at capitalization, prior to creating a function to capitalize the first letter of a string.
let playerChoiceInitial = prompt('Enter your choice.');
let playerChoiceLower = playerChoiceInitial.toLowerCase();
let playerSelection = playerChoiceLower.toUpperCase().charAt(0) + playerChoiceLower.slice(1);
*/

console.log(`${playerNameCap} plays ${playerSelection}.`);

// Below is the function that returns the computer's choice.

function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let computerChoice = getComputerChoice(1, 3);
console.log(computerChoice);

/*
if (computerChoice === 1) {
    console.log('Computer plays Rock.');
} else if (computerChoice === 2) {
    console.log('Computer plays Paper.');
} else if (computerChoice === 3) {
    console.log('Computer plays Scissors.');
} */

switch(computerChoice) {
    case 1:
        console.log('Computer plays Rock.');
        break;
    case 2:
        console.log('Computer plays Paper.');
        break;
    case 3:
        console.log('Computer plays Scissor.');
        break;
}

function convertPlayerChoice() {
    if (playerSelection === 'Rock') {
        let playerSelectionNum = 1;
        return playerSelectionNum;
    } else if (playerSelection === 'Paper') {
        let playerSelectionNum = 2;
        return playerSelectionNum;
    } else if (playerSelection === 'Scissor') {
        let playerSelectionNum = 3;
        return playerSelectionNum;
    } else {
        let playerSelectionNum = 'You didn\'t play a valid hand!';
        return console.log(playerSelectionNum);
    }
}

let playerValue = convertPlayerChoice(playerSelection);

function playRound(playerValue, computerChoice) {
    if (1, 2) {
        return console.log('You Lose! Paper beats Rock.');
    } else if (1, 3) {
        return console.log('You Win! Rock beats Scissors.');
    } else if (2, 1) {
        return console.log('You Win! Paper beats Rock.');
    } else if (2, 3) {
        return console.log('You Lose! Scissors beats Paper.');
    } else if (3, 1) {
        return console.log('You Lose! Rock beats Scissors.');
    } else if (3, 2) {
        return console.log('You Win! Scissors beats Paper.');
    } else {
        return console.log('Tie game. Try again.')
    }
}

let roundOutcome = playRound();