const url = "https://amorea.dk/WP/silfen/wp-json/wp/v2/product?_embed";

fetch(url)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}
function showProduct(product) {
  console.log(product);
  //grab template
  const template = document.querySelector("template").content;
  //clone it
  const myClone = template.cloneNode(true);
  //change data
  myClone.querySelector(".title").textContent = product.title.rendered;
  myClone.querySelector(".price_1").textContent = product.price;
  myClone.querySelector(".brand").textContent = product.categories[0];
  //select parent
  const parent = document.querySelector("main");
  //append child
  parent.appendChild(myClone);
}
