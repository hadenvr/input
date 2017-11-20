// below are variables for the form

var inputName = document.querySelector("#name");
// type name here

var buttonSubmit = document.querySelector("#button");
// submit name button here

var outputName = document.querySelector("#your-name");
// output of name

if (inputName && buttonSubmit && outputName) {
  buttonSubmit.addEventListener("click", function(event) {
    event.preventDefault();

    var typename = inputName.value;

    var outputMessage = "You are traped, ";
    outputMessage += typename;
    outputMessage += "...";
    outputName.textContent = outputMessage;
  });
}
