import operate from "./operate.js";

let displayValue = { first: "", op: "", second: "" };
let firstNumber = "";
let secondNumber = "";
let currentOp = "";

const DISPLAY_TEXT = document.querySelector("#display-text");

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => digit.addEventListener("click", handleDigitClick));

const operations = document.querySelectorAll(".operation");
operations.forEach((op) => op.addEventListener("click", handleOperationClick));

function handleOperationClick(e) {
  if (displayValue.first === "") return;
  if (displayValue.first !== "" && displayValue.second !== "") {
    displayValue.first = `${operate(
      displayValue.op,
      displayValue.first,
      displayValue.second
    )}`;

    displayValue.op = e.target.textContent;
    displayValue.second = "";

    updateDisplay(displayValue);
  }
  if (displayValue.first !== "" && displayValue.second === "") {
    displayValue.op = e.target.textContent;
    updateDisplay(displayValue);
  }
}

function handleDigitClick(e) {
  if (displayValue.op === "") {
    displayValue.first += e.target.textContent;
  } else {
    displayValue.second += e.target.textContent;
  }
  updateDisplay(displayValue);
}

function updateDisplay(v) {
  DISPLAY_TEXT.textContent = v.first + v.op + v.second;
}
