//Remove the <main> element
const main = document.getElementById("main");
main.remove();

//Create a new <h1> element
const newHeader = document.createElement("h1");

//Set the id of the new header
newHeader.id = "victory";

newHeader.textContent = "YOUR-NAME is the Champion;"

document.body.appendChild(newHeader);







