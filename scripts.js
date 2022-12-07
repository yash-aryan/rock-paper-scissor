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

// This function just prompts for an input from the user
function getPlayerSelection() {
    return prompt("Choose: Rock, Paper, or Scissor?");
}

// This function plays 1 round, and outputs the result
// The values from the above player and computer choices functions are stored in a variable here for evaluation
function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = "";
    playerChoice = getPlayerSelection();
    let myChoice = playerChoice.toUpperCase();

    console.log(`You: ${myChoice}`);
    console.log(`Computer: ${computerChoice}`);

    // Round Tie condition is decided here
    if (myChoice === computerChoice) {
        console.log(`Your Score: ${playerWins}`);
        console.log(`Computer's Score: ${computerWins}`);
        console.log(`It's a Tie! ${myChoice} vs ${computerChoice}`);
        return;
    }
    // All player WIN conditions mentioned in one "else if" statement
    else if (myChoice === "ROCK" && computerChoice === "SCISSOR" || myChoice === "PAPER" && computerChoice === "ROCK" || myChoice === "SCISSOR" && computerChoice === "PAPER") {
        playerWins = ++playerWins;
        console.log(`Your Score: ${playerWins}`);
        console.log(`Computer's Score: ${computerWins}`);
        console.log(`Round won! your ${myChoice} beats ${computerChoice}`);
        return;
    }
    // All player LOSE conditions mentioned in one "else if" statement
    else if (computerChoice === "ROCK" && myChoice === "SCISSOR" || computerChoice === "PAPER" && myChoice === "ROCK" || computerChoice === "SCISSOR" && myChoice === "PAPER") {
        computerWins = ++computerWins;
        console.log(`Your Score: ${playerWins}`);
        console.log(`Computer's Score: ${computerWins}`);
        console.log(`Round lost! ${computerChoice} beats your ${myChoice}`);
        return;
    }
    // If there's any spelling mistake in the user input, then this condition re-runs the function again
    // User is asked for an input again, and computer generates another input to all be evaluated again
    else {
        console.log(`"${playerChoice}" is not a valid input. Try again!`);
        console.log("");
        playRound();
    }
}

// This function calls playRound() function until 5 rounds are played with a clear result
// It then compares the player's and computer's round wins to declare the winner
function game() {
    for (let i = 1; i < 6; i++) {
        console.log("");
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
// Above this comment contains all the function declarations to play the RPS game
// Below are the global variables that will store the round wins values throughout the game
let playerWins = 0;
let computerWins = 0;

// This calls for the game to start (best of 5 rounds)
game();