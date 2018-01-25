function getUser() {
  var user = "";
  while (user !== "X" && user !== "O") {
    user = prompt("Do you want to be X or O?").toUpperCase();
   }
   user = switchUser(user); // swithc user back to the actual choice for now
  return user;
}

function buildSpace(coordinate) {
  var spaceTemplate = "<div id='space" + coordinate + "'>_</div>";
  return spaceTemplate;
}

function Player(name, userType, iWon, winTotal) {
  this.name = name;
  this.userType = userType;
  this.iWon = iWon;
  this.winTotal = winTotal;
}

Player.prototype.getName = function(name) {
  if (this.name === "" || this.name === null ) {
    var name = prompt("What is your name?");
  }
  this.name = name;
  return name;
}

// Player prototypes:
// Did I win?
// changeUserType -- do they want to be X or O this time?
// changeName
// am I Human?
// get my name

function Space(spaceNum, marker) {
  this.spaceNum = spaceNum;
  this.marker = marker;
}

Space.prototype.updateMarker = function(marker) {
  this.marker = marker;
  return this.marker;
}


function Board(spaces) {
  this.spaces = spaces; //array of spaces
}

Board.prototype.buildBoard = function() {
  for (var i = 0; i < 9; i++) {
    // this.spaces.push(buildSpace(i));
    var space = new Space(i, "_");
    this.spaces.push(space);
  }
  return this.spaces;
}

function putMarkerInDiv(board, userType, divNum){
  // console.log("Called me!");
  board.spaces[divNum].updateMarker(userType);
  // for (var n=0; n <9; n++){
  //   console.log(n +" = " + board.spaces[n].spaceNum);
  // }
  // displayBoard(board);
}

// function placeInSpace(thing, coordinate) {
//   $("#space" + coordinate).text(thing);
// }

function displayBoard(board) {
  var tempBoardString = "<div class='experiment'>";
  for (var i = 0; i < board.spaces.length; i++) {
    tempBoardString += "<div id='space" + i + "'>" + board.spaces[i].marker + "</div>";
    if (i === 2 || i === 5) {
      tempBoardString += "</div><div class='experiment'>";
    }
  }
  tempBoardString += "</div>"
  $(".board").html(tempBoardString);
  return board; // just to see
}

function updateDiv(mySpace, myUserType) {
  var newSpace = "#space"+mySpace;
  // console.log("Parent = " + newSpace.parent());
  $(newSpace).html(myUserType);
}

function switchUser(myUserType) {
  console.log("i'm in the function" + myUserType);
  if (myUserType === "X") {
    myUserType = "O";
    $("#turn-update").html("<h2>It's O's turn</h2>");
    return myUserType;
  }
  if (myUserType === "O") {
    myUserType = "X";
    $("#turn-update").html("<h2>It's X's turn</h2>");
    return myUserType;
  }
}


function checkWinner(myBoard) {
  console.log(myBoard.spaces[0].marker);
  if ((myBoard.spaces[0].marker === "X") && (myBoard.spaces[3].marker === "X") && (myBoard.spaces[6].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
    return true;
  } else if ((myBoard.spaces[1].marker === "X") && (myBoard.spaces[4].marker === "X") && (myBoard.spaces[7].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
  } else if ((myBoard.spaces[2].marker === "X") && (myBoard.spaces[5].marker === "X") && (myBoard.spaces[8].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
  } else if ((myBoard.spaces[0].marker === "X") && (myBoard.spaces[1].marker === "X") && (myBoard.spaces[2].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
  } else if ((myBoard.spaces[3].marker === "X") && (myBoard.spaces[4].marker === "X") && (myBoard.spaces[5].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
  } else if ((myBoard.spaces[6].marker === "X") && (myBoard.spaces[7].marker === "X") && (myBoard.spaces[8].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
  } else if ((myBoard.spaces[0].marker === "X") && (myBoard.spaces[4].marker === "X") && (myBoard.spaces[8].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
  } else if ((myBoard.spaces[2].marker === "X") && (myBoard.spaces[4].marker === "X") && (myBoard.spaces[6].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
  } else if ((myBoard.spaces[0].marker === "O") && (myBoard.spaces[3].marker === "O") && (myBoard.spaces[6].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ((myBoard.spaces[1].marker === "O") && (myBoard.spaces[4].marker === "O") && (myBoard.spaces[7].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ((myBoard.spaces[2].marker === "O") && (myBoard.spaces[5].marker === "O") && (myBoard.spaces[8].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ((myBoard.spaces[0].marker === "O") && (myBoard.spaces[1].marker === "O") && (myBoard.spaces[2].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ((myBoard.spaces[3].marker === "O") && (myBoard.spaces[4].marker === "O") && (myBoard.spaces[5].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ((myBoard.spaces[6].marker === "O") && (myBoard.spaces[7].marker === "O") && (myBoard.spaces[8].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ((myBoard.spaces[0].marker === "O") && (myBoard.spaces[4].marker === "O") && (myBoard.spaces[8].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ((myBoard.spaces[2].marker === "O") && (myBoard.spaces[4].marker === "O") && (myBoard.spaces[6].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ( (myBoard.spaces[0].marker != "_") && (myBoard.spaces[1].marker != "_") && (myBoard.spaces[2].marker != "_") && (myBoard.spaces[3].marker != "_") && (myBoard.spaces[4].marker != "_") && (myBoard.spaces[5].marker != "_") && (myBoard.spaces[6].marker != "_") && (myBoard.spaces[7].marker != "_") && (myBoard.spaces[8].marker != "_") ) {
    $("#turn-update").html("<h2>It's a draw!</h2>");
  }
}

$(document).ready(function() {
  var userType = getUser();
  console.log("user type = " + userType);

  //displayßSpace(buildSpace(0));
  // placeInSpace(userType, 0);
  var boardArray = [];
  var board = new Board(boardArray);
  board.buildBoard();
  displayBoard(board);
  // console.log("board space 1 = " + board.spaces[1]);

  // space1 = new Space(1, "_");
  // console.log("Space starts as:" + space1.marker);
  // space1.updateMarker(userType);
  // console.log("Space is now:" + space1.marker);

  // var x = prompt("Which space to put a marker in?");
  // board.spaces[x].updateMarker(userType);
  // displayBoard(board);
  // Input: X (or O), win state, num games won
  // player1 = new Player(name, userType, iWon, winTotal);
  var player1 = new Player("", userType, false, 0);
  player1.getName();
  if (userType === "X") {
    userType = "O";
  } else {
    userType = "X";
  }
  var player2 = new Player("", userType, false, 0);

  player2.getName()
  console.log("Player1's name is: " + player1.name + " they chose " + player1.userType);
  console.log("Player2's name is: " + player2.name + " they have " + player2.userType);

  // for (var i = 0; i < 9; i++) {
  //   console.log("Space " + i + "= " + board.spaces[i].spaceNum);
  // }
var winner = false;


  $(function() {
    $(".experiment div").click(function(){
      // if ( this).attr
      // //  console.log("The div was clicked!");
      //  var divName = this.id[this.id.length];
      var divNum = this.id[this.id.length-1];

      //  console.log("div id is: " + divNum);

      //call tell whose turn here
      putMarkerInDiv(board, userType, divNum);
      updateDiv(divNum, userType);
      userType = switchUser(userType); // don't switch user at the beginning.
      console.log("user is now" + userType);
      if (checkWinner(board)) {
        alert("process winner and offer new game. Also disable/unbind all clicks first.")
      };
      // $(this).attr("disabled", "disabled");
      $(this).unbind("click");   // this unbinds ... how to reset
      // console.log("Board is : " + board.spaces[divNum].spaceNum);
    });
  });

  $(function() {
    $("#p1-human").click(function(){
      // var divNum = this.id[this.id.length-1];
      console.log("Clicked the human button for player 1.");
      $(".player1-visible").hide();
      $("#player1-name").show();

      // putMarkerInDiv(board, userType, divNum);
      // updateDiv(divNum, userType);
      // userType = switchUser(userType);
      // console.log("user is now" + userType);
      // checkWinner(board);
      // // $(this).attr("disabled", "disabled");
      $(this).unbind("click");   // this unbinds ... how to reset
      // console.log("Board is : " + board.spaces[divNum].spaceNum);
    });
  });

  $(function() {
    $("#p2-human").click(function(){
      // var divNum = this.id[this.id.length-1];
      console.log("Clicked the human button for player 2.");
      // putMarkerInDiv(board, userType, divNum);
      // updateDiv(divNum, userType);
      // userType = switchUser(userType);
      // console.log("user is now" + userType);
      // checkWinner(board);
      // // $(this).attr("disabled", "disabled");
      $(this).unbind("click");   // this unbinds ... how to reset
      // console.log("Board is : " + board.spaces[divNum].spaceNum);
    });
  });

  $(function() {
    $("#p1-computer").click(function(){
      // var divNum = this.id[this.id.length-1];
      console.log("Clicked the computer button for player 1.");
      // putMarkerInDiv(board, userType, divNum);
      // updateDiv(divNum, userType);
      // userType = switchUser(userType);
      // console.log("user is now" + userType);
      // checkWinner(board);
      // // $(this).attr("disabled", "disabled");
      $(this).unbind("click");   // this unbinds ... how to reset
      // console.log("Board is : " + board.spaces[divNum].spaceNum);
    });
  });

  $(function() {
    $("#p2-computer").click(function(){
      // var divNum = this.id[this.id.length-1];
      console.log("Clicked the computer button for player 2.");
      // putMarkerInDiv(board, userType, divNum);
      // updateDiv(divNum, userType);
      // userType = switchUser(userType);
      // console.log("user is now" + userType);
      // checkWinner(board);
      // // $(this).attr("disabled", "disabled");
      $(this).unbind("click");   // this unbinds ... how to reset
      // console.log("Board is : " + board.spaces[divNum].spaceNum);
    });
  });

});
