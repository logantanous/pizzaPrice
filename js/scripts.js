//business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.fullPrice = function() {
  var price = 12;
  if (this.age > 55) {
    price = price - 2;
  }
  if (this.age < 12) {
    price = price - 3;
  }
  if (this.time < 15) {
    price = price - 2;
  }
  return price;
}

function ageCheck(age, rating) {
  if (age < 17 && rating === "r") {
    return "you are too young to see this movie"
  } else {
    return false;
  }
}


// user interface logic
$(document).ready(function() {
  $("#new-ticket").submit(function(event) {
    var inputtedMovie = $("#movie option:selected").text();
    var inputtedTime = parseInt($("input#time").val());
    var inputtedAge = parseInt($("input#age").val());
    var movieRating = $("#movie option:selected").attr("class");
    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);



    if (ageCheck(inputtedAge, movieRating) !== false ) {
      alert(ageCheck(inputtedAge, movieRating));
    } else {
      $("#total").show();
      $(".movie-output").text(inputtedMovie);
      $(".time-output").text(inputtedTime);
      $(".age-output").text(inputtedAge);
      $(".price-output").text("$" + newTicket.fullPrice());
    }

    event.preventDefault();
  });


});
