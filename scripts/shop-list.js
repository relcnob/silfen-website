const url2 = "https://amorea.dk/WP/silfen/wp-json/wp/v2/product?_embed";

fetch(url2)
  .then((res) => res.json())
  .then((data) => handleShopList(data));

function handleShopList(data) {
  //function needs different name from api.js to work
  //console.log(data);
  data.forEach(showShopList);
}

function showShopList(product) {
  console.log(product);
  //grab template

  const template = document.querySelector("#product-card-template").content;

  //clone it
  const myClone = template.cloneNode(true);
  //change data
  myClone.querySelector(".title-link").textContent = product.product_name;
  myClone
    .querySelector(".title-link")
    .setAttribute("href", `productPage.html?id=${product.id}`);
  myClone
    .querySelector(".pc-image a")
    .setAttribute("href", `productPage.html?id=${product.id}`);
  console.log(myClone.querySelector(".pc-image a"));

  myClone.querySelector(".pc-price").textContent = "DKK " + product.price;
  myClone.querySelector(".pc-image a img").src = product.image.guid;
  //remember to write down the right selector

  //select parent
  const parent = document.querySelector(".pl-wrapper");
  //append child
  parent.appendChild(myClone);
}
