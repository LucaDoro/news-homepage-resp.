overlay = document.querySelector(".overlay");
navMenuModal = document.querySelector(".nav-menu__modal");
navMenu = document.querySelector(".nav-menu");

btnOpen = document.querySelector(".burger-menu__open");
btnClose = document.querySelector(".burger-menu__close");

btnOpen.addEventListener("click", function () {
  navMenuModal.classList.remove("hidden");
  navMenu.classList.add("hidden");
  overlay.classList.remove("hidden");
});
btnClose.addEventListener("click", function () {
  navMenuModal.classList.add("hidden");
  navMenu.classList.remove("hidden");
  overlay.classList.add("hidden");
});

/*
TODO: remove this effect / or only do it for a certain media query (maybe see card-glow-effect js file)

TODO: remove burger menu and display menu lists for desktop devices
TODO: maybe see look up how to animate window ease in and out
TODO: make background (overlay) darker
*/
