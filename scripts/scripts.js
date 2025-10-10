// Burger Menu

const btnBurger = document.getElementById("btnBurger");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("btnClose");

btnBurger.addEventListener("click", function () {
    modal.classList.add("active");
});

btnClose.addEventListener("click", function () {
    modal.classList.remove("active");
});

// Smooth

window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 200) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

const links = document.querySelectorAll(".banner-btn");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}