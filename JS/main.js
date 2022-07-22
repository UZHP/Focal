var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disappear")
}

var button = document.querySelector(".list");
var list = document.querySelector(".navHover")

button.onclick = function () {
    if (list.className == "navHover") {
        list.classList.add("open");
    } else {
        list.classList.remove("open")
    }
}