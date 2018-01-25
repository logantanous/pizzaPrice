var board = { }; // main object

function Space(xCoord, yCoord) {
  this.xCoord = xCoord;
  this.yCoord = yCoord;
}

var board = [];
var xCoordinate = 1;
var rowNumber = 1;
var yCoordinate = 1;

Space.prototype.changeX = function() {
    this.xCoord = xCoordinate;
    if (yCoordinate == 1) {
      xCoordinate++;
    }
}

Space.prototype.changeY = function() {
    this.yCoord = yCoordinate;
    yCoordinate++;
    if (yCoordinate == 4) {
      yCoordinate = 1;
    }
}

for (var x = 0; x <= 8; x++) {
  board[x] = new Space(x,yCoordinate);
  board[x].changeY();
  board[x].changeX();
}
