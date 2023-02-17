const hamburger = document.querySelector(".mobil-menu");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})
document.querySelectorAll(".hero, main, footer").forEach(n => n.addEventListener(
    "click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    }
))