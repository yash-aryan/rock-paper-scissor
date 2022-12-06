// This function generates random choice for the computer
// Using Math.random() to generate numbers from 0 - 100, it outputs the following: 
// "rock" for numbers  0 - 33, "paper" for 34 - 66, "scissor" for 67 - 100
function getComputerChoice() {
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

// This function just prompts an input from the user
function getPlayerSelection() {
    return prompt("Choose: Rock, Paper, or Scissor?");
}

// This function plays 1 round, and outputs the result
function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = "";
    playerChoice = getPlayerSelection();
    let myChoice = playerChoice.toUpperCase();

    console.log(`You: ${myChoice}`);
    console.log(`Computer: ${computerChoice}`);

    if (myChoice === computerChoice) {
        console.log(`Your Score: ${playerWins}`);
        console.log(`Computer's Score: ${computerWins}`);
        return `It's a Tie! ${myChoice} vs ${computerChoice}`;
    }
    // All player WIN conditions mentioned in one "else if" statement
    else if (myChoice === "ROCK" && computerChoice === "SCISSOR" || myChoice === "PAPER" && computerChoice === "ROCK" || myChoice === "SCISSOR" && computerChoice === "PAPER") {
        playerWins = ++playerWins;
        console.log(`Your Score: ${playerWins}`);
        console.log(`Computer's Score: ${computerWins}`);
        return `Round won! your ${myChoice} beats ${computerChoice}`;
    }
    // All player LOSE conditions mentioned in one "else if" statement
    else if (computerChoice === "ROCK" && myChoice === "SCISSOR" || computerChoice === "PAPER" && myChoice === "ROCK" || computerChoice === "SCISSOR" && myChoice === "PAPER") {
        computerWins = ++computerWins;
        console.log(`Your Score: ${playerWins}`);
        console.log(`Computer's Score: ${computerWins}`);
        return `Round lost! ${computerChoice} beats your ${myChoice}`;
    }
    else {
        return `"${playerChoice}" is not a valid input`;
    }
}

function game() {
    for (let i = 1; i < 6; i++) {
        console.log("")
        console.log(`----------- ROUND  ${i} -----------`);
        console.log(playRound());
    }
   let totalCompterWins = computerWins;
   let totalPlayerWins = playerWins;

   if (totalCompterWins > totalPlayerWins) {
    console.log(`YOU LOSE THE GAME! computer wins: ${totalCompterWins}   your wins: ${totalPlayerWins}`);
   }
   else if (totalCompterWins < totalPlayerWins) {
    console.log(`YOU WIN THE GAME!  computer wins: ${totalCompterWins}   your wins: ${totalPlayerWins}`);
   }
   else {
    console.log(`GAME IS TIED!  computer wins: ${totalCompterWins}   your wins: ${totalPlayerWins}`);
   }
}


let playerWins = 0;
let computerWins = 0;

game();

// The resulting output
// alert(`Computer chose ${computerChoice}, which means...`);