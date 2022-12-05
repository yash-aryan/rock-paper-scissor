// This function generates random choice for the computer
// Using Math.random() to generate numbers from 0 - 100, it outputs the following: 
// "rock" for numbers  0 - 33, "paper" for 34 - 66, "scissor" for 67 - 100
function getComputerChoice() {
    let keyValue = Math.floor(Math.random() * 100);
    switch (true) {
        case (keyValue <= 33):
            return "rock";
        case (keyValue > 33 && keyValue <= 66):
            return "paper";
        case (keyValue > 66):
            return "scissor";
        default:
            return "Something went wrong!";
    }
}

// This function just prompts an input from the user
function getPlayerSelection() {
    return prompt("Let's begin! Choose: Rock, Paper, or Scissor?");
}

// This function plays 1 round, and outputs the result
function playRound() {
    if (myChoice === computerChoice) {
        return `It's a Tie! ${myChoice.toCase()} vs ${computerChoice}`;
    }
    // All player WIN conditions mentioned in one "else if" statement
    else if (myChoice === "rock" && computerChoice === "scissor"
    || myChoice === "paper" && computerChoice === "rock" 
    || myChoice === "scissor" && computerChoice === "paper") {
        return `You Win! your ${myChoice} beats ${computerChoice}`
    }
    // All player LOSE conditions mentioned in one "else if" statement
    else if (computerChoice === "rock" && myChoice === "scissor" 
    || computerChoice === "paper" && myChoice === "rock" 
    || computerChoice === "scissor" && myChoice === "paper") {
        return `You Lose! ${computerChoice} beats your ${myChoice}`
    }
    else {
        return "Something went wrong while deciding the winner..."
    }
}

let computerChoice = getComputerChoice();
let playerChoice = getPlayerSelection();
let myChoice = playerChoice.toLowerCase();

// The resulting output
alert(`Computer chose ${computerChoice}, which means...`);
alert(playRound());