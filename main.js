document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".product");

  containers.forEach(function (container) {
    const much = container.querySelector(".much");
    const add = container.querySelector(".add");
    const min = container.querySelector(".min");

    add.addEventListener("click", function () {
      much.value++;
    });

    min.addEventListener("click", function () {
      if (much.value > 1) {
        much.value--;
      }
    });
  });
});

document.getElementById("iphone-btn").addEventListener("click", function () {
  const priceString = document.getElementById("iphone-price");
  const price = parseInt(priceString.innerText);

  const productPriceString = document.getElementById("product-price");
  const productPrice = parseFloat(productPriceString.innerText);

  const taxString = document.getElementById("tax");
  const tax = parseFloat(taxString.innerText);

  const shippingString = document.getElementById("shipping-charge");
  const shipping = parseFloat(shippingString.innerText);

  const totalString = document.getElementById("total");
  const total = parseFloat(totalString.innerText);

  const iphoneValue = document.getElementById("iphone-value");

  productPriceString.innerText = productPrice + price * iphoneValue.value;
  taxString.innerText = (productPrice + price * iphoneValue.value) * 0.1;
  shippingString.innerText = (productPrice + price * iphoneValue.value) * 0.001;
  totalString.innerText =
    productPrice +
    price * iphoneValue.value +
    (productPrice + price * iphoneValue.value) * 0.1 +
    (productPrice + price * iphoneValue.value) * 0.001;
});

document.getElementById("case-btn").addEventListener("click", function () {
  const priceString = document.getElementById("case-price");
  const price = parseInt(priceString.innerText);

  const productPriceString = document.getElementById("product-price");
  const productPrice = parseFloat(productPriceString.innerText);

  const taxString = document.getElementById("tax");
  const tax = parseFloat(taxString.innerText);

  const shippingString = document.getElementById("shipping-charge");
  const shipping = parseFloat(shippingString.innerText);

  const totalString = document.getElementById("total");
  const total = parseFloat(totalString.innerText);

  const iphoneValue = document.getElementById("case-value");

  productPriceString.innerText = productPrice + price * iphoneValue.value;
  taxString.innerText = (productPrice + price * iphoneValue.value) * 0.1;
  shippingString.innerText = (productPrice + price * iphoneValue.value) * 0.001;
  totalString.innerText =
    productPrice +
    price * iphoneValue.value +
    (productPrice + price * iphoneValue.value) * 0.1 +
    (productPrice + price * iphoneValue.value) * 0.001;
});

document.getElementById("checkout-btn").addEventListener("click", function () {
  const totalString = document.getElementById("total");
  totalString.innerText;

  if (totalString.innerText > 0) {
    window.location.href = "checkout.html";
  } else {
    alert("Please select an item!");
  }
  return totalString.innerText;
});
