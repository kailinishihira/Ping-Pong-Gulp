
$(document).ready(function() {
  $("#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#numbers").val());
    var userOutput = pingPongOutput(userInput);
    for (var i = 0; i < userOutput.length; i++) {
      $(".output").append("<li>" + userOutput[i] + "</li>");
    }
    });
  });

var pingPongOutput = function(userInput) {
  var returnValue = [];
  for (var i = 1; i <= userInput; i++) {
    returnValue.push(i);
  }
  for (var i = 0; i < returnValue.length; i++) {
    if (returnValue[i] % 15 === 0) {
      returnValue.splice([i], 1, "pingpong")
    } else if (returnValue[i] % 3 === 0) {
      returnValue.splice([i], 1, "ping")
    } else if (returnValue[i] % 5 === 0) {
      returnValue.splice([i], 1, "pong")
    }
  }
  return returnValue;
}
