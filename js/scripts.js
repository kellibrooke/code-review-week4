// BUSINESS LOGIC
function Order(name, size, toppings){
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Order.prototype.calculatePrice = function(){
  if (this.size === "small") {
    this.price = 8;
  } else if (this.size === "medium") {
    this.price = 12;
  } else if (this.size === "large") {
    this.price = 16;
  }

  this.price += (this.toppings.length * 1)
}


// UI LOGIC
$(function(){

var order = new Order();
$("#order-button").click(function(){
  event.preventDefault();
  var orderName = $("#name-for-order").val();
  var orderSize = $("input:radio[name=choose-size]:checked").val();
  var orderToppings =
  order.name = orderName;
})





})
