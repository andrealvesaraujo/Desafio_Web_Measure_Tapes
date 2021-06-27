// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
// }

var buttonMenu = document.getElementById("button-menu");

buttonMenu.addEventListener('click',(event)=>{

    var header = document.querySelector(".content header");
    var navLinks = document.querySelector(".content header > nav");

    if (!navLinks.classList.contains("active")) {
        navLinks.classList.add("active")
        header.classList.add("active")
    } else {
        navLinks.classList.remove("active")
        header.classList.remove("active")
    }

})
  