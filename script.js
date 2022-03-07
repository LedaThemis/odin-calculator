import operate from "./operate.js";

let displayValue = "";

const DISPLAY_TEXT = document.querySelector("#display-text");

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => digit.addEventListener("click", handleDigitClick));

function handleDigitClick(e) {
  displayValue += e.target.textContent;
  updateDisplay(displayValue);
}

function updateDisplay(value) {
  DISPLAY_TEXT.textContent = value;
}
