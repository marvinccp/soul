const hamburgerItem = document.querySelector(".hamburguer-item");
hamburgerItem.addEventListener("click", () => {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
});

const about = document.querySelector(".about");
about.addEventListener("click", () => {
  location.href = "./about.html";
});


const home = document.querySelector(".home");
home.addEventListener("click", () => {
  location.href = "./landingPage.html";
});

const design = document.querySelector(".design");
design.addEventListener("click", () => {
  location.href = "./design.html";
});

const contact = document.querySelector(".contact");
contact.addEventListener("click", () => {
  location.href = "./contact.html";
});
const title = document.querySelector(".title");
title.addEventListener("click", () => {
  location.href = "./landingPage.html";
});