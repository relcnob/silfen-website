const acc = document.getElementsByClassName("acc-header");
let inc;

for (inc = 0; inc < acc.length; inc++) {
  acc[inc].addEventListener("click", function () {
    this.classList.toggle("active-acc");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("active-panel");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.classList.add("active-panel");
    }
  });
}
