var switchDirection = false;

function doAnimation() {
    var divAdvert = document.getElementById("divAdvert");
    var currentLeft = divAdvert.offsetLeft;
    var newLocation;

    if (!switchDirection) {
        newLocation = currentLeft + 2;

        if (currentLeft >= 400) {
            switchDirection = true;
        } else {
            newLocation = currentLeft - 2;

            if (currentLeft <= 0) {
                switchDirection = false;
            }
        }
    }

    divAdvert.style.left = newLocation + "px";
}

setInterval (doAnimation, 10);