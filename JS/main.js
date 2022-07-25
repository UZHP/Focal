var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disappear")
}

let spanTop = document.querySelector(".top");
window.onscroll = function () {
    // console.log(this.scrollY);
    if (this.scrollY >= 540) {
        spanTop.classList.add("show");
    } else {
        spanTop.classList.remove("show");
    };
};

spanTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

var button = document.querySelector(".list");
var list = document.querySelector(".navHover")

button.onclick = function () {
    if (list.className == "navHover") {
        list.classList.add("open");
    } else {
        list.classList.remove("open")
    }
}

/*global $, alert, console*/

$(function () {

    'use strict';

    $('.navCont li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

});