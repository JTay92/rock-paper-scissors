const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("[data-selection]");
const playGameButton = document.getElementById("play");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
let userChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;
let playGame = true;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (rpsClick) => {
    userChoice = possibleChoice.dataset.selection;
    userChoiceDisplay.innerHTML = userChoice;
    generateCompChoice();
    getResult();
    setTimeout(keepScore, 1000, result);
  })
);

// function to get the result of the rock, paper, scissors game
function getResult() {
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = ":) You Win!!";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result = ":( You Lose!";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = ":) You Win!!";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result = ":( You Lose!";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result = ":) You Win!!";
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    result = ":( You Lose!";
  } else {
    result = "It's a Draw!!";
  }
  resultDisplay.innerHTML = result;
}

function keepScore(result) {
  console.log(result);
  switch (result) {
    case ":) You Win!!":
      playerScore++;
      playerScoreDisplay.innerHTML = playerScore;
      console.log("Player + 1");
      break;
    case ":( You Lose!":
      computerScore++;
      computerScoreDisplay.innerHTML = computerScore;
      console.log("Computer + 1");
      break;
    default:
      console.log("Score not updated");
  }
}

function generateCompChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1); // generate random number between 1 & 3
  // console.log(randomNumber);

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
    default:
      console.log("error, this shouldn't happen");
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}
