var turn = "X";

function checkTurn() {
  if (turn == "X") {
    turn = "O";
    return '<p>X</p>';
  }
  else {
    turn = "X";
    return '<p>O</p>'
  }

}

function checkValues() {
  for (i = 0; i < 9; i++) {
    if ($(".a"+i).children("p").text() == "XXX") {
      return "Winner is X";
    }
    if ($(".a"+i).children("p").text() == "OOO") {
      return "Winner is O";
    }
  }
}

$(document).ready(function() {

  $(".btn").on("click", function() {

    if ($(this).attr('disabled') == "disabled" ) {}
    else {
      $(this).append(checkTurn()).attr('disabled','disabled');
      checkValues();
      if (checkValues() == "Winner is X" || checkValues() == "Winner is O") {
        $(".result")append(checkValues());
        window.setTimeout( show_popup, 1000 );
      }
    }
  })

  $(".reset").on("click", function() {
    $(".btn").removeAttr('disabled');
    $("p").remove();
  })
});
