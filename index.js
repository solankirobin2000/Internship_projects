let duration = 1000;

let randomTarget1 = Math.floor(Math.random() * 1500) + 1;
let increment1 = randomTarget1 / (duration / 10);

let upto1 = 0;
let counts1 = setInterval(updatedProjectComplete, 10);
function updatedProjectComplete() {
    let count = document.getElementById("project-complete");
    upto1 += increment1;
    count.innerHTML = Math.ceil(upto1);
    if (upto1 >= randomTarget1) {
        clearInterval(counts1);
        count.innerHTML = randomTarget1;
    }
}

let randomTarget2 = Math.floor(Math.random() * 196) + 1;
let increment2 = randomTarget2 / (duration / 10);

let upto2 = 0;
let counts2 = setInterval(updatedWorldCountries, 10);
function updatedWorldCountries() {
    let count = document.getElementById("world-countries");
    upto2 += increment2;
    count.innerHTML = Math.ceil(upto2);
    if (upto2 >= randomTarget2) {
        clearInterval(counts2);
        count.innerHTML = randomTarget2;
    }
}

let randomTarget3 = Math.floor(Math.random() * 150) + 1;
let increment3 = randomTarget3 / (duration / 10);

let upto3 = 0;
let counts3 = setInterval(updatedTeamMember, 10);
function updatedTeamMember() {
    let count = document.getElementById("team-member");
    upto3 += increment3;
    count.innerHTML = Math.ceil(upto3);
    if (upto3 >= randomTarget3) {
        clearInterval(counts3);
        count.innerHTML = randomTarget3;
    }
}



let randomTarget4 = Math.floor(Math.random() * 150) + 1;
let increment4 = randomTarget4 / (duration / 10);

let upto4 = 0;
let counts4 = setInterval(updatedAwardWon, 10);
function updatedAwardWon() {
    let count = document.getElementById("awards-won");
    upto4 += increment4;
    count.innerHTML = Math.ceil(upto4);
    if (upto4 >= randomTarget4) {
        clearInterval(counts4);
        count.innerHTML = randomTarget4;
    }
}


window.onscroll = function () { toggleStickyHeader() };

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;
function toggleStickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

$(document).ready(function () {
    $("#toggleclick").click(function () {
        $("#toggleup").slideToggle(300);
    });
    $("#toggleclick1").click(function () {
        $("#toggleup1").slideToggle(300);
    });
    $("#toggleclick2").click(function () {
        $("#toggleup2").slideToggle(300);
    });
}
);