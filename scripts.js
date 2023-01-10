// Gets the node references to display the output in DOM
let plChoice_dom = document.querySelector(".pl-choice");
let botChoice_dom = document.querySelector(".bot-choice");
let plScore_dom = document.querySelector(".pl-score");
let botScore_dom = document.querySelector(".bot-score");
let roundStatus_dom = document.querySelector(".round-status");
let textResult_dom = document.querySelector(".result");

// Global variables
let playerWins = 0;
let botWins = 0;
let playerChoice = "";

// Gets all RPS buttons as node references, therefore storing it in a nodelist to iterate upon using forEach()
let buttons = document.querySelectorAll("#btn");
buttons.forEach((button) => {
  // Add eventListeneter on each RPS button to take the corresponding inputs
  button.addEventListener("click", startGame);
});

// ----- FUNCTIONS -----

// Main function that uses the alt text on the RPS buttons as string input
// Calls playRound() until best of 5, and then declares the winner
function startGame(e) {
  e.preventDefault();
  playerChoice = e.currentTarget.alt.toUpperCase();
  playRound();
  console.log("HELLO");
  if (playerWins + botWins === 5) {
    if (botWins > playerWins) {
      textResult_dom.textContent += "You lose!";
    } else if (botWins < playerWins) {
      textResult_dom.textContent += "You win!";
    } else {
      textResult_dom.textContent += "Tied!";
    }
  }
}

// This function generates random choice for the computer
// Using Math.random() to generate numbers from 0 - 100, it outputs the following:
// "ROCK" for numbers  0 - 33, "paper" for 34 - 66, "scissor" for 67 - 100
function getBotChoice() {
  let keyValue = 0;
  keyValue = Math.floor(Math.random() * 100);
  switch (true) {
    case keyValue <= 33:
      return "ROCK";
    case keyValue > 33 && keyValue <= 66:
      return "PAPER";
    case keyValue > 66:
      return "SCISSOR";
    default:
      return "Something went wrong while computer is choosing move";
  }
}

// Plays 1 round, evaluates the winner and adds points accoordingly, points are not added for tie
function playRound() {
  let botChoice = getBotChoice();
  plChoice_dom.textContent = `You chose: ${playerChoice}`;
  botChoice_dom.textContent = `Computer chooses: ${botChoice}`;

  // Round Tie condition is decided here
  if (playerChoice === botChoice) {
    roundStatus_dom.textContent = "It's a Tie, same choices!";
    plScore_dom.textContent = `${playerWins}`;
    botScore_dom.textContent = `${botWins}`;
    return;
  }
  // All player WIN conditions mentioned in one "else if" statement
  else if (
    (playerChoice === "ROCK" && botChoice === "SCISSOR") ||
    (playerChoice === "PAPER" && botChoice === "ROCK") ||
    (playerChoice === "SCISSOR" && botChoice === "PAPER")
  ) {
    playerWins = ++playerWins;
    roundStatus_dom.textContent = `Round won! your ${playerChoice} beats ${botChoice}`;
    plScore_dom.textContent = `${playerWins}`;
    botScore_dom.textContent = `${botWins}`;
    return;
  }
  // All player LOSE conditions mentioned in one "else if" statement
  else if (
    (botChoice === "ROCK" && playerChoice === "SCISSOR") ||
    (botChoice === "PAPER" && playerChoice === "ROCK") ||
    (botChoice === "SCISSOR" && playerChoice === "PAPER")
  ) {
    botWins = ++botWins;
    roundStatus_dom.textContent = `Round lost! ${botChoice} beats your ${playerChoice}`;
    plScore_dom.textContent = `${playerWins}`;
    botScore_dom.textContent = `${botWins}`;
    return;
  } else console.log("How can this happen?!");
}