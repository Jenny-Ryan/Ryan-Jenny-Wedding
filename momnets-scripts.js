const elements = document.getElementsByClassName('column');

// Full-width images
function one() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "95%";  // IE10
        elements[i].style.flex = "95%";
    }
}

// Two images side by side
function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "40%";  // IE10
        elements[i].style.flex = "40%";
    }
}

// Three images side by side
function three() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%";  // IE10
        elements[i].style.flex = "25%";
    }
}

// Add active class to the current button (highlight it)
const header = document.getElementById("imageHeader");
const btn = header.getElementsByClassName("btn");
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
