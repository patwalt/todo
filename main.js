// Here's our javascript file
// The button is disabled on initial page load
function disableSubmit() {
    document.getElementById("btnSubmit").disabled = true;
}

function myFunction() {
    alert(theNote.value);
}

// listen for the note field to have a length > 0:
noteField.addEventListener("noteField", myFunction);

