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
  // CLEAN UP THE ABOVE BY MAKING MATHEMATICAL EQUATION BASED ON TOPPINGS.LENGTH TO ADJUST LENGTH INSTEAD OF IF ELSE
}





// UI LOGIC
$(function(){

var order = new Order();
// console.log(order);
// order.calculatePrice();
// console.log(order);
$("#order-button").click(function(){
  event.preventDefault();
  var orderName = $("#name-for-order").val();
  var orderSize = $("input:radio[name=choose-size]:checked").val();
  var orderToppings = 
  order.name = orderName;
})


// order.calculatePrice();



})
