/*----- constants -----*/ 
const end = 9;
const BOARDCOL = {
  '0': 'grey',
  '1': 'black',
  '-1': 'red'
};

/*----- app's state (variables) -----*/ 
let board, turn, winner;

/*----- cached element references -----*/ 


/*----- event listeners -----*/ 
document.querySelector('section').addEventListener('click', whenClick);

/*----- functions -----*/
init();

function init() {
  board = [0, 0 , 0, 0, 0, 0, 0, 0 , 0];
  turn = 1;
  winner = null;
  render();
}

function render() {
  board.forEach(function(sqr, idx) {
    let squares = document.getElementById(`sqr${idx}`);
    squares.style.background = BOARDCOL[sqr];
    console.log(squares);
  });
}

function whenClick(evt) {
  var idx = parseInt(evt.target.id.replace('sqr', ''));
  board[idx] = turn;
  turn *= -1;
  render();
}