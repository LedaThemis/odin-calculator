import operate from "./operate.js";

let values = { first: "", op: "", second: "" };

const DISPLAY_TEXT = document.querySelector("#display-text");

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => digit.addEventListener("click", handleDigitClick));

const operations = document.querySelectorAll(".operation");
operations.forEach((op) => op.addEventListener("click", handleOperationClick));

const equalsButton = document.querySelector("#op-eq");
equalsButton.addEventListener("click", handleEqualsClick);

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", handleClearClick);

const dotButton = document.querySelector("#dot-button");
dotButton.addEventListener("click", handleDotClick);

function handleDotClick(e) {
  if (values.op === "") {
    if (values.first.includes(".")) return;
    values.first += e.target.textContent;
  } else {
    if (values.second.includes(".")) return;
    values.second += e.target.textContent;
  }
  updateDisplay(values);
}

function handleClearClick(e) {
  values = { first: "", op: "", second: "" };
  updateDisplay(values);
}

function handleEqualsClick(e) {
  if (values.first === "" || values.second === "" || values.op === "") return;
  values.first = calculateCurrentValue(values.op, values.first, values.second);
  values.second = "";
  values.op = "";
  updateDisplay(values);
}

function handleOperationClick(e) {
  if (values.first === "") return;
  if (values.first !== "" && values.second !== "") {
    values.first = calculateCurrentValue(
      values.op,
      values.first,
      values.second
    );

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
    if (values.first[0] === "0" && values.first.length === 1) {
      if (e.target.textContent === "0") return;
      values.first = e.target.textContent;
    } else {
      values.first += e.target.textContent;
    }
  } else {
    if (values.second[0] === "0" && values.second.length === 1) {
      if (e.target.textContent === "0") return;
      values.second = e.target.textContent;
    } else {
      values.second += e.target.textContent;
    }
  }
  updateDisplay(values);
}

function updateDisplay(v) {
  DISPLAY_TEXT.textContent = v.first + v.op + v.second;
}

function calculateCurrentValue(op, f, s) {
  if (parseInt(s) === 0) {
    alert("No division by zero here, yet.");
    return f;
  } else {
    return `${operate(values.op, values.first, values.second)}`;
  }
}
