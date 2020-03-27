// makes the paragraph1 element a variable
const pElement = document.getElementById("paragraph1");

// set the paragraph1 element to align to the center of the page
pElement.setAttribute("align", "center");

// the alert shows the value of align
alert(pElement.getAttribute("align"));

// removes the value of align and text goes back to left align
pElement.removeAttribute("align");