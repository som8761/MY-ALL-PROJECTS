async function getData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  // console.log('data:',data[15].image);
  const renderData = document.getElementById("renderData");
  const cart_container = document.getElementById("cart_container");

  data.map((element) => {
    // image element
    const imgEle = document.createElement("img");
    imgEle.setAttribute("src", element.image);
    // imgEle.setAttribute('class','imageStyle')
    imgEle.classList.add("imageStyle");
    // Title element
    const trimmedTitle = element.title.slice(0, 25);
    const titleEle = document.createElement("p");
    const titleText = document.createTextNode(trimmedTitle);
    titleEle.appendChild(titleText);

    titleEle.classList.add("titleSTyle");

    // price element
    const priceEle = document.createElement("p");
    const priceText = document.createTextNode(`price$:${element.price}`);
    priceEle.appendChild(priceText);
    // button element
    const btnEle = document.createElement("button");
    btnEle.classList.add("btnSyle");
    const btnText = document.createTextNode("Add To Cart");
    btnEle.appendChild(btnText);

    // ekta div banalam r tar modhe sob kota element er box ke
    const containerForEachElement = document.createElement("div");
    containerForEachElement.classList.add("containerForEachElement_style");
    containerForEachElement.appendChild(imgEle);
    containerForEachElement.appendChild(titleEle);
    containerForEachElement.appendChild(priceEle);
    containerForEachElement.appendChild(btnEle);

    renderData.appendChild(containerForEachElement);

    // adding event on each card.
    btnEle.addEventListener("click", () => {
      dataOnCart(element.image, element.title, element.price);
    });
  });
}
getData();

function dataOnCart(imageSrc, title, price) {
  // console.log(imageSrc);
  // console.log(title);
  // console.log(price);
  const cart_container = document.getElementById("cart_container");
  const cartHeading = document.getElementById("cartHeading");
  const cartContainerH1 = document.querySelector("#cart_container h1");
  const TC = document.getElementById("TC");
  const total = document.querySelector("#TC p");
  const sup = document.querySelector("#cart_icon sup");

  // create a img tag for updating the elements inside the cart container.
  const cartImageEle = document.createElement("img");
  cartImageEle.setAttribute("src", imageSrc);
  cartImageEle.classList.add("cartImageStyle");

  const cartPriceEle = document.createElement("p");
  const cartPriceText = document.createTextNode(`price$: ${price}`);
  cartPriceEle.appendChild(cartPriceText);

  const deleteEle = document.createElement("span");
  deleteEle.classList.add("deleteIcon");
  deleteEle.innerHTML = '<i class="fas fa-trash"></i>'; // Use "fas" for solid style in Font Awesome

  const liEle = document.createElement("li");
  liEle.classList.add("liStyle");

  liEle.appendChild(cartImageEle);
  liEle.appendChild(cartPriceEle);
  liEle.appendChild(deleteEle);

  cart_container.appendChild(liEle);

  let displayBlock = (cartHeading.style.display = "flex");
  if (displayBlock) {
    cartContainerH1.style.display = "none";
    TC.style.display = " flex";
  }

  sup.innerHTML++;

  // adding event on trash icon.
  deleteEle.addEventListener("click", () => {
    removeLiFromCart(liEle, sup); // calling the function for remove.
  });

  // calling the function for calculate the total price of cart items
  totalPrice(price, total);
}

// creating a function for removing the cart items and change the cartheading as well.
function removeLiFromCart(cartItem, sup) {
  // saveTaskToTheLocalStorage(); // call this function for save the data in local storage.
  const cartContainerH1 = document.querySelector("#cart_container h1");
  const cartHeading = document.getElementById("cartHeading");

  cartItem.remove();
  sup.innerHTML--;

  // Check if there are no more cart items
  const remainingCartItems = document.querySelectorAll(
    "#cart_container .liStyle"
  );
  if (remainingCartItems.length === 0) {
    cartContainerH1.style.display = "block";
    cartHeading.style.display = "none";
  }
}

//   for calculate the total of the items.
const priceArray = [];
// creating a function for calculate the total price of cart items.
function totalPrice(price, total) {
  priceArray.push(price);
  const totalPrice = priceArray.reduce((acc, price) => {
    return price + acc;
  });
  total.innerHTML = `total Price:${totalPrice}`;
  // console.log(totalPrice);
}

const cart_icon = document.getElementById("cart_icon");
const cart_container = document.getElementById("cart_container");

cart_icon.addEventListener("click", () => {
  cart_container.classList.toggle("cart_container_style");
});

// function saveTaskToTheLocalStorage() {
//   try {
//     const task = cart_container.innerHTML;
//     localStorage.setItem("containerItems", task);
//   } catch (error) {
//     console.log("error while saving the data to the local storage:", error);
//   }
// }

// function showTask() {
//   task = localStorage.getItem("containerItems");
//   cart_container.innerHTML = task;
// }

// showTask();

// console.log(cart_container.innerHTML = 'som');


