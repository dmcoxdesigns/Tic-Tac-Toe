let playerOneName = document.getElementById("player1");
let playerTwoName = document.getElementById("player2");

let input = document.getElementById("input");
let input2 = document.getElementById("input2");

let button = document.getElementById("submit-button");
button.addEventListener("click", function (event) {
  const player1 =
    "Hi there " + input.value + " - You'll be - X - and you go first!";

  const player2 =
    "Hello " + input2.value + " - You'll be - O -, so who's the best?";

  playerOneName.innerText = player1;
  playerTwoName.innerText = player2;
  event.preventDefault();
});

let gameState = {
  board: [null, null, null, null, null, null, null, null, null],

  currentPlayer: "X",
};

function switchPlayer() {
  if (gameState.currentPlayer === "X") {
    gameState.currentPlayer = "O";
  } else {
    gameState.currentPlayer = "X";
  }
}
const board = document.getElementById("board");

board.addEventListener("click", function (e) {
  const index = +e.target.id;

  gameState.board[index] = gameState.currentPlayer;

  renderBoard();
  switchPlayer();
  calculateWinner("X", "O");
});

function renderBoard() {
  for (let i = 0; i < gameState.board.length; i++) {
    const currDiv = document.getElementById(`${i}`);
    currDiv.innerText = gameState.board[i];
  }
}
const winner = calculateWinner(gameState.board);

function calculateWinner(moves) {
  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningPattern.length; i++) {
    const [a, b, c] = winningPattern[i];
    if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
      return gameState.currentPlayer;
    }
  }
  return "";
}
const showWinner = document.createElement("div");
showWinner.innerHTML = "The WINNER is " + winner;
document.getElementById("winner").appendChild(showWinner);

// const reloadButton = document.getElementById("start-over");
// function reload() {
//   reload = window.location.reload();
//   preventDefault();
// }

// if (showWinner === null) {
//   return "";
// }

// winner.innerText = currentPlayer;
// // let winner1;
// calculateWinner.innerText.section("winner");
// if (player1 === winningPattern) {
//   return "You Win!" + player1;
// } else {
//   return "You Win!" + player2;
// }
// To hide an element, set the style display property to “none”.

// document.getElementById("element").style.display = "none";
// To show an element, set the style display property to “block”.

// document.getElementById("element").style.display = "block";
// })
//let winner = section.getElementById("scoreBoard");

// }
//button.addEventListener("click", function (event)
// let restartButton = document.getElementById("start-over");
// restartButton.addEventListener("click", window.location.reload);
