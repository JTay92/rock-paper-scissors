const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

possibleChoices.forEach((choice) =>
  addEventListener("click", (rpsClick) => {
    userChoice = rpsClick.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateCompChoice();
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
