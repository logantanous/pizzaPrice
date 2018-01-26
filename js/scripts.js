function Pizza(toppings,size) {
  //this.cheese = cheese;
  this.toppings = toppings;
  this.size = size;
  this.price = "";
}

var pizza1 = new Pizza([],"XL");

Pizza.prototype.changePrice = function() {
  var finalPrice = 0;
  if (this.size == "XL") {finalPrice += 15}
  if (this.size == "L") {finalPrice += 13}
  if (this.size == "M") {finalPrice += 11}
  if (this.size == "S") {finalPrice += 9}
  for (var x = 0; x < pizza1.toppings.length; x++) {
    if (this.toppings[x] == "bacon") {finalPrice += 2}
    else {finalPrice += 1}
  }
  this.price = finalPrice;
  return finalPrice;
}

$(document).ready(function() {

  // $(".topping").click(function(){
  //   if($(this).hasClass("checked")) {
  //     pizza1.toppings.pop($(this).attr("id"));
  //     $(this).removeClass("checked");
  //   } else {
  //     pizza1.toppings.push($(this).attr("id"));
  //     $(this).addClass("checked");
  //   }
  // })

  

  $(".calculate").click(function() {

    alert($("input[name=cheese]:checked").val());


    $(".result").html(pizza1.changePrice());
  })
})
