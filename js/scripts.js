// BUSINESS LOGIC
function Order(name, size){
  this.name = name;
  this.size = size;
  this.toppings = [];
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
  order.name = $("#name-for-order").val();
  order.size = $("input:radio[name=choose-size]:checked").val();
  $("input:checkbox[name=toppings]:checked").each(function(){
    var topping = $(this).val();
    order.toppings.push(topping);
  })
  order.calculatePrice();
  console.log(order);
})





})
