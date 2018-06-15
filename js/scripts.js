// BUSINESS LOGIC
function Order(name, size){
  this.name = name;
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

Order.prototype.calculatePrice = function(){
  this.price = this.size + (this.toppings.length *1)
  return this.price;
}

Order.prototype.valueToSize = function(){
  var sizeWord;
  if(this.size === 8){
    sizeWord = "Small";
  } else if (this.size === 12){
    sizeWord = "Medium";
  } else {
    sizeWord = "Large"
  }
  return sizeWord;
}

function validate(uiUserName, howManyToppings){
  if (uiUserName === "" || howManyToppings === 0){
    alert("Please fill out the form with your name and choose at least 1 topping.");
    document.getElementById("order-form").reset();
  } else {
  document.getElementById("order-form").reset();
  $("#order-form-div").hide();
  $("#order-confirmation-area").slideDown();
  }
}


// UI LOGIC
$(function(){

var order = new Order();

$("#order-button").click(function(){
  event.preventDefault();
  var orderName = $("#name-for-order").val();
  var toppingsLength = order.toppings.length;
  order.toppings.length = 0;
  $("#order-confirm-name").text(orderName);
  $("ul#toppings").text("");
  order.name = $("#name-for-order").val();
  order.size = parseInt($("input:radio[name=choose-size]:checked").val());
  $("input:checkbox[name=toppings]:checked").each(function(){
    var topping = $(this).val();
    order.toppings.push(topping);
    $("ul#toppings").append("<li>" + topping + "</li>");
  })
console.log(order.toppings.length);
  var size = order.valueToSize();
  var price = order.calculatePrice();
  $("#pizza-size").text(size);
  $("#pizza-price").text("$ " + price);

  validate(orderName, toppingsLength);
})

$("#order-again-button").click(function(){
  $("#order-confirmation-area").hide();
  $("#order-form-div").slideDown();
})






})
