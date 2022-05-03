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
  let pcColors = product.color.split(" ");
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
  myClone.querySelector(".secondary-image").src = product.secondary_image.guid;
  //remember to write down the right selector
  // colors

  console.log(pcColors);
  pcColors.forEach((color) => {
    const span = document.createElement("span");
    span.textContent = " ";
    span.setAttribute("class", "c-" + color + " pc-color");
    console.log(span);
    myClone.querySelector(".pc-colors").appendChild(span);
  });
  myClone
    .querySelector(".pc-colors span:first-child")
    .classList.add("c-selected");

  //select parent
  const parent = document.querySelector(".pl-wrapper");
  //append child
  parent.appendChild(myClone);
}
