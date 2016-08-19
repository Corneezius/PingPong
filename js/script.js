$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    $("li").remove();
var array = [];
var num = ($("#input").val());

for ( var i = 1; i <= num; i++) {
  array.push(i);

  if (i % 3 === 0 && i % 15 === 0) {
  array.pop(i);
  array.push("pingpong");
  }
  else if (i % 3 === 0 ) {
  array.pop(i);
  array.push("ping");
  }
  else if (i % 5 === 0 ) {
  array.pop(i);
  array.push("pong");
  }
 }

console.log(array);
for (var i = 0; i < array.length; i++) {
      $(".output").append('<li>' + array[i] + '</li>');
    }

    $("li").show();


   });
  });
