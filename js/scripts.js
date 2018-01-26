function Pizza() {
  this.cheese = true;
  this.toppings = [];
  this.size;
  this.price = 0;
  this.sauce = "";
}

var pizza1 = new Pizza();

Pizza.prototype.changeSauce = function(sauce) {
  this.sauce = sauce;
  return sauce;
}

Pizza.prototype.changeSize = function(size) {
  this.size = size;
  return size;
}

Pizza.prototype.changeCheese = function(cheese) {
  this.cheese = cheese;
  return cheese;
}

Pizza.prototype.changePrice = function() {
  var finalPrice = 0;
  if (this.size == "large") {finalPrice += 13}
  if (this.size == "medium") {finalPrice += 11}
  if (this.size == "small") {finalPrice += 9}
  for (var x = 0; x < this.toppings.length; x++) {
    if (this.toppings[x] == "bacon") {finalPrice = finalPrice + 2}
    else {finalPrice = finalPrice + 1}
  }
  this.price = finalPrice;
  return finalPrice;
}

$(document).ready(function() {
  var steps = 1;
  $("input[name=topping]").removeAttr('checked');
  $("input[name=marinara]").attr('checked');
  $("input[name=cheese]").attr('checked');

  $(".next").click(function() {
    if (steps == 1) {
      pizza1.changeSize($("input[name=size]:checked").val());
      $(".step1").hide();
      $(".step2").show();
      $("#current").removeAttr('id');
      $(".on:nth-of-type(2)").attr('id', 'current');
      steps++;
      return false;
    }
    if (steps == 2) {
        if ($("input[name=cheese]").is(':checked')) {pizza1.changeCheese(true)}
        else {
          pizza1.changeCheese(false);
          $(".pizza").attr('src', 'img/marinara.png');
        }
        $(".step2").hide();
        $(".step3").show();
        $("#current").removeAttr('id');
        $(".on:nth-of-type(3)").attr('id', 'current');
        steps++;
        return false;
    }
    if (steps == 3) {
      pizza1.changeSauce($("input[name=sauce]:checked").val());
      if (pizza1.cheese == false) {$(".pizza").attr('src', "img/"+pizza1.sauce+".png");}
      $(".step3").hide();
      $(".step4").show();
      $("#current").removeAttr('id');
      $(".on:nth-of-type(4)").attr('id', 'current');
      steps++;
      return false;
    }
    if (steps == 4) {
      $(".step4").hide();
      $(".next").hide();
      $(".result").html(
        "<h6>Your total is: $"+
        pizza1.changePrice()+
        "</h6>"
        );
      steps++;
      return false;
    }
  })

  $("input[name=cheese]").click(function() {
    if ($(this).is(':checked')) {
      $(".pizza").attr("src", "img/cheesepizza.png");
    }
    else {
      $(".pizza").attr("src", "img/marinara.png");
    }
  })

  $("input[name=topping]").click(function() {
    if ($(this).is(':checked')) {
      pizza1.toppings.push($(this).val());
      $("img[src='img/"+$(this).val()+".png']").css('display', 'inline-block');
    }
    else {
      pizza1.toppings.pop($("input[name=topping]").val);
      $("img[src='img/"+$(this).val()+".png']").hide();
    }
  })

  $("input[name=sauce]").click(function() {
    if (pizza1.cheese == false) {
      if ($("input[value=marinara]").is(':checked')) {
        $(".pizza").attr("src", "img/marinara.png");
      }
      if ($("input[value=alfredo]").is(':checked')) {
        $(".pizza").attr("src", "img/alfredo.png");
      }
      if ($("input[value=bbq]").is(':checked')) {
        $(".pizza").attr("src", "img/bbq.png");
      }
    }
  })

})
