const hamburger = document.querySelector(".mobil-menu");
const navMenu = document.querySelector(".menu");
// const body = document.querySelector('body');


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // body.classList.toggle('lock');


})
document.querySelectorAll(".hero, .careers-hero, .about-hero, main, footer").forEach(n => n.addEventListener(
    "click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    }
))