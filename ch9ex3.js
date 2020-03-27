// Create HTML elements and text with DOM methods

let newText = document.createTextNode("My Heading");
let newElem = document.createElement("h1");

newElem.appendChild(newText);
document.body.appendChild(newElem);

newText = document.createTextNode("This is some text created by js");
newElem = document.createElement("p");

newElem.appendChild(newText);
document.body.appendChild(newElem);