var board = { }; // main object

function Space(xCoord, yCoord) {
  this.xCoord = xCoord;
  this.yCoord = yCoord;
}

function Player(character, turn) {
  this.character = character;
  this.turn = turn;
}

player1 = new Player("x",true);
player2 = new Player("o",false);

var board = [];
var xCoordinate = 1;
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


$(document).ready(function() {
  $(".btn").click(function(){
    //parse the id so we can match it with its corresponding object
    var myString = $(this).attr("id");
    var myRegexp = /.(.*?)_(.*?)$/;
    var match = myRegexp.exec(myString);
    //console.log("match 1: "+match[1]+" match 2: "+match[2]);
    var objectNumber = match[2];
    if (match[1] == 1) {}//object = y
    if (match[1] == 2) {objectNumber = parseInt(objectNumber) + 3}//object = y+3
    if (match[1] == 3) {objectNumber = parseInt(objectNumber) + 6}//object = y+6
    
    console.log(objectNumber);

  })
})
