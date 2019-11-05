function Ticket(name, time, age){
  this.name = name,
  this.time = time,
  this.age = age
}

Ticket.prototype.calculatePrice = function(){
  var basePrice = 8.0;
  if (this.name == "1") {
      basePrice += 1.5;
  }
  if (this.time == "1") {
     basePrice -= 1.5;
  }
  if (this.age == "1") {
    basePrice -= 1.5;
  }
  return basePrice;
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var name = $(".title").val();
    var time = $(".time").val();
    var age = $(".age").val();
    console.log(name);
    var ticket = new Ticket(name, time, age);

    $("#result").html("$" + ticket.calculatePrice());
  });


});
