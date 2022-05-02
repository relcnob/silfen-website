const filterWrapper = document.querySelector(".pl-filter-wrapper");
const filterToggle = document.querySelector("#pl-filters-expand");

filterToggle.addEventListener("click", () => {
  filterWrapper.classList.toggle("pl-filter-wrapper-toggled");
});
