const url3 = "https://amorea.dk/WP/silfen/wp-json/wp/v2/product?per_page=8";

let carouselNumber = 0;
fetch(url3)
  .then((res) => res.json())
  .then((data) => handleHomeProductList(data));

function handleHomeProductList(data) {
  //function needs different name from api.js to work
  //console.log(data);
  data.forEach(showHomeProductList);
}

function showHomeProductList(product) {
  console.log(product);
  //grab template
  const template = document.querySelector(".template-products").content;

  //clone it
  const myClone = template.cloneNode(true);
  //change data
  myClone.querySelector(".title-link").textContent = product.product_name;
  myClone
    .querySelector(".title-link")
    .setAttribute("href", `productPage.html?id=${product.id}`);
  console.log(myClone.querySelector(".title-link"));
  myClone
    .querySelector(".pc-image a")
    .setAttribute("href", `productPage.html?id=${product.id}`);
  console.log(myClone.querySelector(".title-link"));
  myClone.querySelector(".pc-price").textContent = "DKK " + product.price;
  myClone.querySelector(".pc-image a img").src = product.image.guid;
  //remember to write down the right selector

  //select parent
  const parent = document.querySelector(".home-productlist");
  //append child
  parent.appendChild(myClone);
}
