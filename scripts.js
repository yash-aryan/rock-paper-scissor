// This function generates random choice for the computer
// Using Math.random() to generate numbers from 0 - 100, it outputs the following: 
// "ROCK" for numbers  0 - 33, "paper" for 34 - 66, "scissor" for 67 - 100
function getBotChoice() {
    let keyValue = 0;
    keyValue = Math.floor(Math.random() * 100);
    switch (true) {
        case (keyValue <= 33):
            return "ROCK";
        case (keyValue > 33 && keyValue <= 66):
            return "PAPER";
        case (keyValue > 66):
            return "SCISSOR";
        default:
            return "Something went wrong while computer is choosing move";
    }
}

// Plays 1 round, evaluates the winner and adds points accoordingly, points are not added for tie
function playRound() {
    let botChoice = getBotChoice();
    console.log(`You: ${playerChoice}`);
    console.log(`Computer: ${botChoice}`);

    // Round Tie condition is decided here
    if (playerChoice === botChoice) {
        console.log(`Your Score: ${playerWins}`);
        console.log(`Computer's Score: ${botWins}`);
        console.log(`It's a Tie! ${playerChoice} vs ${botChoice}`);
        return;
    }
    // All player WIN conditions mentioned in one "else if" statement
    else if 
    (playerChoice === "ROCK" && botChoice === "SCISSOR" || 
    playerChoice === "PAPER" && botChoice === "ROCK" || 
    playerChoice === "SCISSOR" && botChoice === "PAPER") {
        playerWins = ++playerWins;
        console.log(`Your Score: ${playerWins}`);
        console.log(`Computer's Score: ${botWins}`);
        console.log(`Round won! your ${playerChoice} beats ${botChoice}`);
        return;
    }
    // All player LOSE conditions mentioned in one "else if" statement
    else if 
    (botChoice === "ROCK" && playerChoice === "SCISSOR" || 
    botChoice === "PAPER" && playerChoice === "ROCK" || 
    botChoice === "SCISSOR" && playerChoice === "PAPER") {
        botWins = ++botWins;
        console.log(`Your Score: ${playerWins}`);
        console.log(`Computer's Score: ${botWins}`);
        console.log(`Round lost! ${botChoice} beats your ${playerChoice}`);
        return;
    }

    else console.log("How can this happen?!");
}

let playerWins = 0;
let botWins = 0;
let playerChoice = "";

// Gets all RPS buttons as node references, therefore storing it in a nodelist to iterate upon using forEach()
let buttons = document.querySelectorAll('#btn');
buttons.forEach((button) => {
    // Add eventListeneter on each RPS button to take the corresponding inputs
    button.addEventListener('mouseenter', getAltText);
});
// Main function that uses the alt text on the RPS buttons as string input
// Calls playRound() until best of 5, and then declares the winner
function getAltText(e) {
    playerChoice = e.currentTarget.alt.toUpperCase();
    playRound()
    if (playerWins + botWins === 5) {
        if (botWins > playerWins) {
            console.log(`YOU LOSE THE GAME! computer wins: ${botWins}   your wins: ${playerWins}`);
           }
           else if (botWins < playerWins) {
            console.log(`YOU WIN THE GAME!  computer wins: ${botWins}   your wins: ${playerWins}`);
           }
           else {
            console.log(`GAME IS TIED!  computer wins: ${botWins}   your wins: ${playerWins}`);
           }
    }
}