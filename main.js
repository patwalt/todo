// Here's our javascript file
var buttonSubmit = document.getElementById("btnSubmit");
var clickSubmit = document.getElementsByClassName('click')[1];

var noteField = document.getElementById("theNote");
// The button is disabled on initial page load
function disableSubmit() = {
    document.getElementById("btnSubmit").disabled = true;
}

// listen for the note field to have a length > 0:
noteField.addEventListener(length > 0, function(event) {
    buttonSubmit.disabled = !buttonSubmit.disabled;
});

