const menuButton = document.querySelector(".menu-toggle");
const menuWrapper = document.querySelector(".header-menu");
let menuOpen = false;

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
