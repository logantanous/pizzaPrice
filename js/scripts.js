var board = { }; // main object
var board = [];
var xCoordinate = 1;
var yCoordinate = 1;

function Space(xCoord, yCoord) {
  this.xCoord = xCoord;
  this.yCoord = yCoord;
  this.spotTaken = false;
  this.character = "";
}

function Player(character, turn) {
  this.character = character;
  this.turn = turn;
}

player1 = new Player("x",true);

player2 = new Player("o",false);

Space.prototype.changeX = function() {
    this.xCoord = xCoordinate;
    if (yCoordinate == 1) {
      return xCoordinate++;
    }
}

Space.prototype.changeY = function() {
    this.yCoord = yCoordinate;
    yCoordinate++;
    if (yCoordinate == 4) {
      return yCoordinate = 1;
    }
}

function checkValues() {
  for (i = 0; i < 9; i++) {
    if ($(".a"+i).children("p").text() == "xxx") {
      return "Winner is X";
    }
    if ($(".a"+i).children("p").text() == "ooo") {
      return "Winner is O";
    }
  }
}

$(document).ready(function() {

  for (var x = 1; x <= 9; x++) {
    board[x] = new Space(x,yCoordinate);
    board[x].changeY();
    board[x].changeX();
  }

  $(".btn").click(function(){
    var myString = $(this).attr("id");
    var myRegexp = /.(.*?)_(.*?)$/;
    var match = myRegexp.exec(myString);
    var objectNumber = match[2];
    if (match[1] == 1) {}//object = y
    if (match[1] == 2) {objectNumber = parseInt(objectNumber) + 3}
    if (match[1] == 3) {objectNumber = parseInt(objectNumber) + 6}
    if (board[objectNumber].spotTaken == true) {
      $(".result").html("Pick another spot")
    }
    else {
      if (player1.turn == true) {
        player1.turn = false;
        player2.turn = true;
        $(this).append("<p>"+player1.character+"</p>");
        board[objectNumber].character = player1.character;
      }
      else {
        player1.turn = true;
        player2.turn = false;
        $(this).append("<p>"+player2.character+"</p>");
        board[objectNumber].character = player2.character;
      }

      board[objectNumber].spotTaken = true;
      //console.log(board[objectNumber]);
      //make a prompt to ask for character
      $(".result").html("");
    }

    checkValues();
    if (checkValues() == "Winner is X" || checkValues() == "Winner is O") {
      $(".result").html(checkValues());
    }
  })
  $(".reset").on("click", function() {
    $("p").remove();
    $(".result").html("");
    for (var x = 1; x <= 9; x++) {
      board[x].spotTaken = false;
      board[x].character = "";
    }
  })
})
