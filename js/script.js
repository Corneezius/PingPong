$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    $("li").remove();
    var userInput = ($("#input").val());
    var result = counter(userInput);

    for (var i = 0; i < result.length; i++) {
      $(".output").append('<li>' + result[i] + '</li>');
    }
  });
});

var counter = function (limit) {
  var count = [];

  for ( var i = 1; i <= limit; i++) {

    if (i % 15 === 0) {
      count.push("pingpong");
    }
    else if (i % 3 === 0 ) {
      count.push("ping");
    }
    else if (i % 5 === 0 ) {
      count.push("pong");
    }
    else {
      count.push(i);
    }
  }

  return count;
}
