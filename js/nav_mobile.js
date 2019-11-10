function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementById("hamburger").innerHTML = "X";
    } else {
        x.className = "topnav";
        document.getElementById("hamburger").innerHTML = "&#9776;";
    }
}