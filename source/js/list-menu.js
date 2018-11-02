var navButton = document.querySelector(".main-navigation__button");
var navMenu = document.querySelector(".site-list");
var navColor = document.querySelector(".page-header__top--closed")

navButton.addEventListener("click", function() {
  if (navButton.classList.contains("main-navigation__toggle")) {
    navButton.classList.remove("main-navigation__toggle");
    navButton.classList.add("main-navigation__toggle--cross");
    navMenu.classList.remove("site-list--closed");
    navMenu.classList.add("site-list--opened");
    navColor.classList.remove("page-header__clear");
    navColor.classList.add("page-header__dark");
  } else {
    navButton.classList.remove("main-navigation__toggle--cross");
    navButton.classList.add("main-navigation__toggle");
    navMenu.classList.remove("site-list--opened");
    navMenu.classList.add("site-list--closed");
    navColor.classList.remove("page-header__dark");
    navColor.classList.add("page-header__clear");
  }
})
