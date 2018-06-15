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


// UI LOGIC
$(function(){

var order = new Order();
$("#order-button").click(function(){
  event.preventDefault();


  order.name = $("#name-for-order").val();
  order.size = parseInt($("input:radio[name=choose-size]:checked").val());
  $("input:checkbox[name=toppings]:checked").each(function(){
    var topping = $(this).val();
    order.toppings.push(topping);
    $("ul#toppings").append("<li>" + topping + "</li>");
  })

  var size = order.valueToSize();
  var price = order.calculatePrice();
  $("#pizza-size").text(size);
  $("#pizza-price").text("$ " + price);

})






})
