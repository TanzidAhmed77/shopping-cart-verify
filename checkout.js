const randomNumberInput = document.getElementById("randomNumberInput");
document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
    randomNumberInput.value = randomFourDigitNumber;
  });

document.getElementById("buttons").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const input = document.getElementById("pinNumber");

  if (input.value.length < 4) {
    if (number >= 0 && number <= 9) {
      input.value += number;
    }
  }
  if (number === "Del") {
    input.value = input.value.slice(0, -1);
  } else if (number === "C") {
    input.value = "";
  }
});

document.getElementById("submit").addEventListener("click", function () {
  const input = document.getElementById("pinNumber");
  const pin = document.getElementById("randomNumberInput").value;

  if (pin === input.value) {
    popup.style.display = "flex";
  } else {
    unpopup.style.display = "flex";
  }
  input.value = "";
});

const closePopupButton = document.getElementById("closePopupButton");
const popup = document.getElementById("popup");

closePopupButton.addEventListener("click", function () {
  window.location.href = "index.html";
});
const unClosePopupButton = document.getElementById("unClosePopupButton");
const unpopup = document.getElementById("unpopup");

unClosePopupButton.addEventListener("click", function () {
  unpopup.style.display = "none";
});
