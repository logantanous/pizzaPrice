function Pizza(toppings,size) {
  this.toppings = toppings;
  this.size = size;
  this.price = "";
}

pizza1 = new Pizza(["Pepporoni","cheese","jalapenos","bacon"],"XL");

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


  $(".calculate").click(function(){
    $(".result").append(pizza1.changePrice());
  })
})
