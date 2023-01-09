const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((choice) =>
  addEventListener("click", (rpsClick) => {
    userChoice = rpsClick.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateCompChoice();
    getResult();
  })
);

function generateCompChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1); // generate random number between 1 & 3
  console.log(randomNumber);

  //   if (randomNumber === 1) {
  //     computerChoice = "rock";
  //   } else if (randomNumber === 2) {
  //     computerChoice = "paper";
  //   } else if (randomNumber === 3) {
  //     computerChoice = "scissors";
  //   }

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
  for (let i = 0; i < 2; i++) {
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
}

function detButtonClick() {
  rockButton.addEventListener("click", function () {
    userChoiceDisplay.innerHTML = "Rock";
    console.log("User selected Rock");
  });
  paperButton.addEventListener("click", function () {
    userChoiceDisplay.innerHTML = "Paper";
    console.log("User selected Paper");
  });
  scissorsButton.addEventListener("click", function () {
    userChoiceDisplay.innerHTML = "Scissors";
    console.log("User selected Scissors");
  });
}
