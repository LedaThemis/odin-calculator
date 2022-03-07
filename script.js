import operate from "./operate.js";

let values = { first: "", op: "", second: "" };

const DISPLAY_TEXT = document.querySelector("#display-text");

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => digit.addEventListener("click", handleDigitClick));

const operations = document.querySelectorAll(".operation");
operations.forEach((op) => op.addEventListener("click", handleOperationClick));

const equalsButton = document.querySelector("#op-eq");
equalsButton.addEventListener("click", handleEqualsClick);

function handleEqualsClick(e) {
  if (values.first === "" || values.second === "" || values.op === "") return;
  values.first = `${operate(values.op, values.first, values.second)}`;
  values.second = "";
  values.op = "";
  updateDisplay(values);
}

function handleOperationClick(e) {
  if (values.first === "") return;
  if (values.first !== "" && values.second !== "") {
    values.first = `${operate(values.op, values.first, values.second)}`;

    values.op = e.target.textContent;
    values.second = "";

    updateDisplay(values);
  }
  if (values.first !== "" && values.second === "") {
    values.op = e.target.textContent;
    updateDisplay(values);
  }
}

function handleDigitClick(e) {
  if (values.op === "") {
    values.first += e.target.textContent;
  } else {
    values.second += e.target.textContent;
  }
  updateDisplay(values);
}

function updateDisplay(v) {
  DISPLAY_TEXT.textContent = v.first + v.op + v.second;
}
