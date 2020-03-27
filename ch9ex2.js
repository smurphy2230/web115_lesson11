// demonstrating navigating through the dom tree with javascript

let htmlElement; // stores reference to <html>
let headElement; // stores reference to <head>
let bodyElement; // stores reference to <body>
let h1Element; // stores reference to <h1>
let pElement; // stores reference to <p>

htmlElement = document.documentElement;
headElement = htmlElement.firstChild;

alert(headElement.tagName);

if (headElement.nextSibling.nodeType == 3) {
    bodyElement = headElement.nextSibling.nextSibling;
} else {
    bodyElement = headElement.nextSibling;
}

alert(bodyElement.tagName);

if (bodyElement.firstChild.nodeType == 3) {
    h1Element = bodyElement.firstChild.nextSibling;
} else {
    h1Element = bodyElement.firstChild;
}

alert(h1Element.tagName);
h1Element.style.fontFamily = "Arial";

if (h1Element.nextSibling.nodeType == 3) {
    pElement = h1Element.nextSibling.nextSibling;
} else {
    pElement = h1Element.nextSibling;
}

alert(pElement.tagName);
pElement.style.fontFamily = "Arial";

if (pElement.previousSibling.nodeType == 3) {
    h1Element = pElement.previousSibling.previousSibling;
} else {
    h1Element = pElement.previousSibling;
}

h1Element.style.fontFamily = "Courier";