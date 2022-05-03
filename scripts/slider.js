const sliderLeft = document.querySelector(".arrow-left");
const sliderRight = document.querySelector(".arrow-right");
let activeSlide = 1;

sliderLeft.addEventListener("click", () => {
  updateSlide();
});

sliderRight.addEventListener("click", () => {
  updateSlide();
});

setInterval(updateSlide, 5000);

function updateSlide() {
  if (activeSlide == 1) {
    document.querySelector(".slide-1").classList.add("slide-visible");
    document.querySelector(".slide-2").classList.remove("slide-visible");
    activeSlide = 2;
  } else {
    document.querySelector(".slide-2").classList.add("slide-visible");
    document.querySelector(".slide-1").classList.remove("slide-visible");
    activeSlide = 1;
  }
}
