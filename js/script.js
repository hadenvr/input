// below are variables for the form

var inputName = document.querySelector("#name");
var inputAge = document.querySelector("#age");
var inputColor = document.querySelector("#color");

var buttonSubmit = document.querySelector("#button");
var outputResult = document.querySelector("#results");

if (inputName && buttonSubmit && outputResult) {
  buttonSubmit.addEventListener("click", function(event) {
    event.preventDefault();

    var typename = inputName.value;

    var outputMessage = "You are traped, ";
    outputMessage += typename;
    outputMessage += "...";
    outputName.textContent = outputMessage;
  });
}
