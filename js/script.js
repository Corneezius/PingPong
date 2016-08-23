$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    $("li").remove();
    var count = [];
    var limit = ($("#input").val());

    for ( var i = 1; i <= limit; i++) {
      count.push(i);

      if (i % 15 === 0) {
        count.pop(i);
        count.push("pingpong");
      }
      else if (i % 3 === 0 ) {
        count.pop(i);
        count.push("ping");
      }
      else if (i % 5 === 0 ) {
        count.pop(i);
        count.push("pong");
      }
    }


    for (var i = 0; i < count.length; i++) {
      $(".output").append('<li>' + count[i] + '</li>');
    }

    $("li").show();


   });
  });
