const startGameBtn = document.getElementById("start-game-button");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WIN";
const RESULT_COMPUTER_WINS = "COMPUTER WIN";

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

const getComputerChoice = () => {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (computerChoice, playerChoice) => {
  return computerChoice === playerChoice
    ? RESULT_DRAW
    : (computerChoice === ROCK && playerChoice === PAPER) ||
      (computerChoice === PAPER && playerChoice === SCISSORS) ||
      (computerChoice === SCISSORS && playerChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

  /* if (computerChoice === playerChoice) {
    return RESULT_DRAW;
  } else if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  } */
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;

  console.log("Game starting");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
});
