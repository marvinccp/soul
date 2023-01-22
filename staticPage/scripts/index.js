const hamburgerItem = document.querySelector(".hamburguer-item");
hamburgerItem.addEventListener("click", () => {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
});


const routes = {
  "about": "../pages/about.html",
};

const about = document.querySelector(".about");
about.addEventListener("click", () => {
  location.href = routes['about']
});

const home = document.querySelector(".home");
home.addEventListener("click", () => {
  location.href = "../pages/index.html"
});

const design = document.querySelector(".design");
design.addEventListener("click", () => {
  location.href = "../pages/design.html"
});

const contact = document.querySelector(".contact");
contact.addEventListener("click", () => {
  location.href = "../pages/contact.html"
});

const title = document.querySelector(".title");
title.addEventListener("click", () => {
  location.href = "../public/index.html"
});


