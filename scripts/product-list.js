const url2 =
  "https://amorea.dk/WP/silfen/wp-json/wp/v2/product?per_page=4&?_embed";

fetch(url2)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

function handleProductList(data) {
  //function needs different name from api.js to work
  //console.log(data);
  data.forEach(showProductList);
}

function showProductList(product) {
  console.log(product);
  //grab template
  const template = document.querySelector(".template-products").content;

  let pcColors = product.color.split(" ");
  //clone it
  const myClone = template.cloneNode(true);
  //change data
  myClone.querySelector(".title-link").textContent = product.product_name;
  myClone
    .querySelector(".title-link")
    .setAttribute("href", `productpage.html?id=${product.id}`);
  myClone
    .querySelector(".pc-image a")
    .setAttribute("href", `productpage.html?id=${product.id}`);
  console.log(myClone.querySelector(".title-link"));
  console.log(myClone.querySelector(".title-link"));

  myClone.querySelector(".pc-price").textContent = "DKK " + product.price;
  myClone.querySelector(".pc-image a img").src = product.image.guid;

  //select parent
  const parent = document.querySelector(".related-products");
  //append child
  parent.appendChild(myClone);
}
