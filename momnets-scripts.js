const elements = document.getElementsByClassName('column');

// Full-width images
function one() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "100%";  // IE10
        elements[i].style.flex = "100%";
    }
}

// Two images side by side
function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "48%";  // IE10
        elements[i].style.flex = "48%";
    }
}

// Three images side by side
function three() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "31%";  // IE10
        elements[i].style.flex = "31%";
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
