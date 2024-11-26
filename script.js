overlay = document.querySelector(".overlay");
navMenuModal = document.querySelector(".nav-menu__modal");
navMenu = document.querySelector(".nav-menu");

btnOpen = document.querySelector(".menu-toggle");
btnClose = document.querySelector(".burger-menu__close");

btnOpen.addEventListener("click", function () {
  navMenuModal.classList.add("show");
  overlay.classList.add("show");
});

btnClose.addEventListener("click", function () {
  navMenuModal.classList.remove("show");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", function () {
  navMenuModal.classList.remove("show");
  overlay.classList.remove("show");
});

/*
TODO: remove this effect / or only do it for a certain media query (maybe see card-glow-effect js file)

TODO: remove burger menu and display menu lists for desktop devices
TODO: maybe see look up how to animate window ease in and out
TODO: make background (overlay) darker
*/
