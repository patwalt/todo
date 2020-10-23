// Here's our javascript file
// The button is disabled on initial page load
function disableSubmit() {
    document.getElementById("btnSubmit").disabled = true;
}

function myFunction() {
    var theText = document.getElementById(theNote.value);
    var listNode = document.getElementById("theList");
    var addNode = document.createElement("LI");
    addNode.appendChild(theText);

    // var txtNode = document.createTextMode(theText);

    // addNode.appendChild(txtNode);
    listNode.appendChild(addNode);
    document.getElementById("theList").appendChild(listNode);
    // alert(theNote.value);
}

// listen for the note field to have a length > 0:
//noteField.addEventListener("noteField", myFunction);

