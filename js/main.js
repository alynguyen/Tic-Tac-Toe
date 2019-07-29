/*----- constants -----*/ 
let bgm = document.createElement("audio");
bgm.src = "audio/got.mp3";
const end = 9;
const BOARDCOL = {
  '0': '',
  '1': '<img class="stark" src="img/strk.png">',
  '-1': '<img class="lanni" src="img/lanni.png">',
};

const turnName = {
  '1': 'stark',
  '-1': 'lannister',
}

/*----- app's state (variables) -----*/ 
let board, turn, winner, moves;

/*----- cached element references -----*/ 
var msg = document.getElementById('msg');

/*----- event listeners -----*/ 
document.querySelector('section').addEventListener('click', whenClick);
document.getElementById('starkInit').addEventListener('click', starkInit);
document.getElementById('lanniInit').addEventListener('click', lanniInit);

/*----- functions -----*/

function starkInit() {
  turn = 1;
  init();
}

function lanniInit() {
  turn = -1;
  init();
}
function init() {
  bgm.play();
  msg.innerHTML = '';
  board = [0, 0, 0,
           0, 0, 0,
           0, 0, 0];
  winner = 0;
  moves = 0;
  render();
}

function render() {
  board.forEach(function(sqr, idx) {
    let squares = document.getElementById(`sqr${idx}`);
    squares.innerHTML = BOARDCOL[sqr];
    msg.innerHTML = `House ${turnName[turn]}'s turn`;
  });
  if (winner === 1) {
    msg.innerHTML = `House ${turnName[winner]} has won!`;
  } else if (winner == -1) {
    msg.innerHTML = `House ${turnName[winner]} has won!`;
  } else if (moves === 9) {
    msg.innerHTML = 'Game over.. no winner!';
  }
}

function whenClick(evt) {
  var idx = parseInt(evt.target.id.replace('sqr', ''));
  if (board[idx] === 0 && winner ===0) {
    board[idx] = turn;
    turn *= -1;
    moves ++;
    console.log(moves);
    getWinner();
    render();
  } else if (winner === 1 || winner === -1) {
    msg.innerHTML = 'Hit reset to start a new game!';
    return;
  }
}

function getWinner () {
    if (board[0] === 1 && board[1] === 1 && board[2] === 1) winner = 1;
    if (board[0] === -1 && board[1] === -1 && board[2] === -1) winner = -1;
    if (board[3] === 1 && board[4] === 1 && board[5] === 1) winner = 1;
    if (board[3] === -1 && board[4] === -1 && board[5] === -1) winner = -1;
    if (board[6] === 1 && board[7] === 1 && board[8] === 1) winner = 1;
    if (board[6] === -1 && board[7] === -1 && board[8] === -1) winner = -1;
    if (board[0] === 1 && board[3] === 1 && board[6] === 1) winner = 1;
    if (board[0] === -1 && board[3] === -1 && board[6] === -1) winner = -1;
    if (board[1] === 1 && board[4] === 1 && board[7] === 1) winner = 1;
    if (board[1] === -1 && board[4] === -1 && board[7] === -1) winner = -1;
    if (board[2] === 1 && board[5] === 1 && board[8] === 1) winner = 1;
    if (board[2] === -1 && board[5] === -1 && board[8] === -1) winner = -1;
    if (board[0] === 1 && board[4] === 1 && board[8] === 1) winner = 1;
    if (board[0] === -1 && board[4] === -1 && board[8] === -1) winner = -1;
    if (board[2] === 1 && board[4] === 1 && board[6] === 1) winner = 1;
    if (board[2] === -1 && board[4] === -1 && board[6] === -1) winner = -1;
}
