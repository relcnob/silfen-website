const menuButton = document.querySelector(".menu-toggle");
const menuWrapper = document.querySelector(".header-menu");
const searchIcon = document.querySelector("#searchIcon");
const searchBar = document.querySelector(".searchbar");
const searchClose = document.querySelector(".searchbar-close");
const basketIcon = document.querySelector("#basketIcon");
const basketWrapper = document.querySelector(".basket");
const basketClose = document.querySelector(".basket-close");
const contentOverlay = document.querySelector(".content-overlay");

let menuOpen = false;
let searchOpen = false;
let basketOpen = false;

menuButton.addEventListener("click", () => {
  if (!menuOpen) {
    menuButton.classList.add("open");
    menuWrapper.classList.add("toggled");
    menuOpen = true;
  } else {
    menuButton.classList.remove("open");
    menuWrapper.classList.remove("toggled");
    menuOpen = false;
  }
});

searchIcon.addEventListener("click", () => {
  if (!searchOpen) {
    searchOpen = true;
    searchBar.classList.toggle("searchbar-visible");
  } else {
    searchOpen = false;
    searchBar.classList.toggle("searchbar-visible");
  }
});
searchClose.addEventListener("click", () => {
  if (!searchOpen) {
    searchOpen = true;
    searchBar.classList.toggle("searchbar-visible");
  } else {
    searchOpen = false;
    searchBar.classList.toggle("searchbar-visible");
  }
});

basketIcon.addEventListener("click", () => {
  if (!basketOpen) {
    basketOpen = true;
    basketWrapper.classList.toggle("basket-visible");
    contentOverlay.classList.toggle("overlay-visible");
    if (searchOpen) {
      searchOpen = false;
      searchBar.classList.remove("searchbar-visible");
    }
  } else {
    basketOpen = false;
    basketWrapper.classList.toggle("basket-visible");
    contentOverlay.classList.remove("overlay-visible");
    if (searchOpen) {
      searchOpen = false;
      searchBar.classList.remove("searchbar-visible");
    }
  }
});

basketClose.addEventListener("click", () => {
  if (!basketOpen) {
    basketOpen = true;
    basketWrapper.classList.toggle("basket-visible");
    if (searchOpen) {
      searchOpen = false;
      searchBar.classList.remove("searchbar-visible");
    }
  } else {
    basketOpen = false;
    basketWrapper.classList.toggle("basket-visible");
    contentOverlay.classList.remove("overlay-visible");
    if (searchOpen) {
      searchOpen = false;
      searchBar.classList.remove("searchbar-visible");
    }
  }
});
