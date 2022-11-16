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
  isPlaying: true,
  winner: "",
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
  if (gameState.board[index] === null && gameState.isPlaying) {
    gameState.board[index] = gameState.currentPlayer;

    renderBoard();
    gameState.winner = calculateWinner(["X", "O"]);
    document.getElementById("winner").innerHTML =
      "The WINNER is: " + gameState.winner;
    switchPlayer();
  }
});

function renderBoard() {
  for (let i = 0; i < gameState.board.length; i++) {
    const currDiv = document.getElementById(`${i}`);
    currDiv.innerText = gameState.board[i];
  }
}

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
    let l1 = gameState.board[a];
    let l2 = gameState.board[b];
    let l3 = gameState.board[c];
    console.log([l1, l2, l3]);
    if (l1 === l2 && l1 === l3 && l1 !== null && l2 !== null && l3 !== null) {
      gameState.isPlaying = false;

      return gameState.currentPlayer;
    }
  }
  return "";
}
const showWinner = document.createElement("div");

let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function (e) {
  resetGame();
});

function resetGame() {
  let cell;
  for (let i = 0; i < gameState.board.length; i++) {
    gameState.board[i] = null;
    cell = document.getElementById(`${i}`);
    cell.innerText = "";
  }
  gameState.currentPlayer = "X";
  gameState.isPlaying = true;
  gameState.winner = "";
}
