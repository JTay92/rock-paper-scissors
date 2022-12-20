const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;

possibleChoices.forEach((choice) =>
  addEventListener("click", (rpsClick) => {
    userChoice = rpsClick.target.id;
    userChoiceDisplay.innerHTML = userChoice;
  })
);

function generateCompChoice() {
  randomNumber = Math.floor(Math.random() * 3 + 1); // generate random number between 1 & 3
}
