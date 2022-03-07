import operate from "./operate.js";

let displayValue = "";

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => digit.addEventListener("click", handleDigitClick));

function handleDigitClick(e) {
  displayValue += e.target.textContent;
}
