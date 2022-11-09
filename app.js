let playerOneName = document.getElementById("player1");
let playerTwoName = document.getElementById("player2");

let input = document.getElementById("input");
let input2 = document.getElementById("input2");

let button = document.getElementById("submit-button");
button.addEventListener("click", function (event) {
  const player1 =
    "Hi there " + input.value + " - You'll be (X) and you go first!";

  const player2 =
    "Hello " + input2.value + " - You'll be (O), so who's the best?";

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
  calculateWinner();
});

function renderBoard() {
  for (let i = 0; i < gameState.board.length; i++) {
    const currDiv = document.getElementById(`${i}`);
    currDiv.innerText = gameState.board[i];
  }
}
const winner = calculateWinner(currentPlayer.board);

function calculateWinner(cell) {
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
    if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
      return cell[a];
    }
  }
  return null;
}
calculateWinner.innerText.section;
if (player1 === winningPattern) {
}
// })
//let winner = section.getElementById("scoreBoard");

const reloadButton = document.getElementById("start-over");
function reload() {
  reload = location.reload();
  preventDefault();
}
