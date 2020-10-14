// Here's our javascript file
var buttonSubmit = document.getElementById("btnSubmit");
var clickSubmit = document.getElementsByClassName('click')[1];

var noteField = document.getElementById("theNote");
// The button is disabled on initial page load
function disableSubmit() {
    document.getElementById("btnSubmit").disabled = true;
}

function myFunction() {
    alert("The field had: " + noteField);
  }

// listen for the note field to have a length > 0:
noteField.addEventListener("noteField", myFunction);

