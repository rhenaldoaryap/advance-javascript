const startGameBtn = document.getElementById("start-game-button");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?"`,
    ""
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid input, we have choice ${DEFAULT_USER_CHOICE} for you`);
    return DEFAULT_USER_CHOICE;
  }

  return selection;
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;

  console.log("Game starting");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
