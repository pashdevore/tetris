function lPiece(){
  this.state1 = [[1,0],
                 [1,0],
                 [1,1]];

  this.state2 = [[0,0,1],
                 [1,1,1]];

  this.state3 = [[1,1],
                 [0,1],
                 [0,1]];

  this.state4 = [[1,1,1],
                 [1,0,0]];

  this.states = [this.state1, this.state2, this.state3, this.state4];
  this.currentState = 0;

  this.color = 0;

  // if board is 8 across
  // piece will start in middle
  this.gridX = 4;

  // piece will start offscreen at top
  this.gridY = -3;
}

function reverseLPiece(){
  this.state1 = [[0,1],
                 [0,1],
                 [1,1]];

  this.state2 = [[1,1,1],
                 [0,0,1]];

  this.state3 = [[1,1],
                 [1,0],
                 [1,0]];

  this.state4 = [[1,0,0],
                 [1,1,1]];

  this.states = [this.state1, this.state2, this.state3, this.state4];
  this.currentState = 0;

  this.color = 0;

  // if board is 8 across
  // piece will start in middle
  this.gridX = 4;

  // piece will start offscreen at top
  this.gridY = -3;
}

function blockPiece(){
  this.state1 = [[1,1],
                 [1,1]];

  this.states = [this.state1];
  this.currentState = 0;

  this.color = 0;
  this.gridX = 4;

  // block is only 2 pieces high
  // therefore only needs value of -2
  // to be offscreen at top
  this.gridY = -2;
}

function linePiece(){
  this.state1 = [[1],
                 [1],
                 [1],
                 [1]];

  this.state2 = [[1,1,1,1]];

  this.states = [this.state1, this.state2];
  this.currentState = 0;

  this.color = 0;
  this.gridX = 5;
  this.gridY = -4;
}

function tPiece(){
  this.state1 = [[1,1,1],
                 [0,1,0]];

  this.state2 = [[1, 0],
                 [1, 1],
                 [1, 0]];

  this.state3 = [[0, 1, 0],
                 [1, 1, 1]];

  this.state4 = [[0, 1],
                 [1, 1],
                 [0, 1]];

  this.states = [this.state1, this.state2, this.state3, this.state4];
  this.currentState = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -3;
}

function zPiece(){
  this.state1 = [[1, 1, 0],
                 [0, 1, 1]];

  this.state2 = [[0, 1],
                 [1, 1],
                 [1, 0]];

  this.states = [this.state1, this.state2];
  this.currentState = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -3;
}

function reverseZPiece(){
  this.state1 = [[0, 1, 1],
                 [1, 1, 0]];

  this.state2 = [[1, 0],
                 [1, 1],
                 [0, 1]];

  this.states = [this.state1, this.state2];
  this.currentState = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -3;
}

function getRandomPiece(){
  var result = Math.floor( Math.random() * 7 );
  var piece;

  switch(result){
    case 0:
      piece = new lPiece();
      break;
    case 1:
      piece = new reverseLPiece();
      break;
    case 2:
      piece = new blockPiece();
      break;
    case 3:
      piece = new linePiece();
      break;
    case 4:
      piece = new tPiece();
      break;
    case 5:
      piece = new zPiece();
      break;
    case 6:
      piece = new reverseZPiece();
      break;
  }

  piece.color = Math.floor( Math.random() * 8 );
  return piece;
}
