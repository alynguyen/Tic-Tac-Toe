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


/*----- functions -----*/
init();

function init() {
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  turn = 1;
  winner = null;
  render();
}
function render() {
  board.forEach(function(colArr, cIdx) {
    colArr.forEach(function(sqr, rIdx) {
      let sqrC = document.getElementById(`c${cIdx}r${rIdx}`);
      sqrC.style.backgroundColor = BOARDCOL[sqr];
      console.log('colArr');
    });
  });

}

function whenClick(evt) {
  
}