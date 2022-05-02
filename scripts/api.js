const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://amorea.dk/WP/silfen/wp-json/wp/v2/product/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  //change content
  document.querySelector(".product-name").textContent = product.title.rendered;
  document.querySelector(".pc-price").textContent = "DKK " + product.price;
  document.querySelector(".pc-description").textContent = product.description;
  document.querySelector(".pc-pic img").src = product.image.guid;
  document.querySelector(".pc-materials").textContent = product.material;
  document.querySelector(".pc-strap-lenght").textContent = product.stap_length;
  document.querySelector(".pc-dimensions").textContent = product.dimensions;

  // if (product.stap_length === false) {
  //   const element = document.getElementById("strap");
  //   element.remove();
  // }
}
