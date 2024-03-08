/*
Get the user's choice via a prompt.
Run a string method to convert the user's choice to lowercase.
Run an if else or switch statement that converts the user's choice to a number between 1 and 3 inclusive.
Run a function that generates a random number between 1 and 3 as the computer's choice.
Run an if else or switch statement that compares the user's and computer's choice and returns a result string.
Repeat the above until one player wins three times and return a game over message.
*/

function capitalizeFirstLetter(text) {
    const textLower = text.toLowerCase();
    const textUpperFirst = textLower.toUpperCase().charAt(0) + textLower.slice(1);
    return textUpperFirst;
}

function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const playerName = 'User'; //prompt('Let\'s play Rock Paper Scissors! Best of five wins. Please enter your name.');
const playerNameCap = capitalizeFirstLetter(playerName);

function roundOfGame() {
    const playerChoiceInitial = prompt('Enter your choice.');
    const playerSelection = capitalizeFirstLetter(playerChoiceInitial);

    /* First pass at capitalization, prior to creating a function to capitalize the first letter of a string.
    let playerChoiceInitial = prompt('Enter your choice.');
    let playerChoiceLower = playerChoiceInitial.toLowerCase();
    let playerSelection = playerChoiceLower.toUpperCase().charAt(0) + playerChoiceLower.slice(1);
    */

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
            return alert('You didn\'t play a valid hand. Please check your spelling and try again.');
        }
    }

    const playerValue = convertPlayerChoice(playerSelection);
    console.log(playerValue);

    console.log(`${playerNameCap} plays ${playerSelection}.`);

    // Below is the function that returns the computer's choice.

    const computerChoice = getComputerChoice(1, 3);
    console.log(computerChoice); // For debugging

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


    function playRound(playerValue, computerChoice) {
        if ((playerValue === 1 && computerChoice === 1) || (playerValue === 2 && computerChoice === 2) || (playerValue === 3 && computerChoice === 3)) {
            console.log('Tie! Try again.');
            return alert('Tie! Try again.');
        } else if (playerValue === 1 && computerChoice === 2) {
            console.log('You Lose! Paper beats Rock.');
            return alert('You Lose! Paper beats Rock.');
        } else if (playerValue === 1 && computerChoice === 3) {
            console.log('You Win! Rock beats Scissors.');
            return alert('You Win! Rock beats Scissors.');
        } else if (playerValue === 2 && computerChoice === 1) {
            console.log('You Win! Paper beats Rock.');
            return alert('You Win! Paper beats Rock.');
        } else if (playerValue === 2 && computerChoice === 3) {
            console.log('You Lose! Scissors beats Paper.');
            return alert('You Lose! Scissors beats Paper.');
        } else if (playerValue === 3 && computerChoice === 1) {
            console.log('You Lose! Rock beats Scissors.');
            return alert('You Lose! Rock beats Scissors.');
        } else if (playerValue === 3 && computerChoice === 2) {
            console.log('You Win! Scissors beats Paper.');
            return alert('You Win! Scissors beats Paper.');
        } else {
            console.log('Invalid round.');
        }
    }

    const roundOutcome = playRound(playerValue, computerChoice);
}

roundOfGame();