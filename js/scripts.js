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


// function resetFields() {
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input.new-street").val("");
//     $("input.new-city").val("");
//     $("input.new-state").val("");
// }

// user interface logic
$(document).ready(function() {


});
