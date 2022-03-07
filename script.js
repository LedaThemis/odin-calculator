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

const deleteButton = document.querySelector("#delete-button");
deleteButton.addEventListener("click", handleDeleteClick);

window.addEventListener("keyup", handleKeyboardClick);
// prevent browser from opening quick find
window.addEventListener("keydown", (e) =>
  e.key === "/" ? e.preventDefault() : ""
);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#eee";
    setTimeout(() => {
      e.target.style.backgroundColor = "";
    }, 25);
  })
);

function handleKeyboardClick(e) {
  const button = document.querySelector(`[data-key="${e.key}"]`);
  if (button) {
    button.click();
  }
}

function handleDeleteClick(e) {
  if (values.second !== "") {
    values.second = values.second.slice(0, -1);
  } else if (values.op !== "") {
    values.op = "";
  } else {
    values.first = values.first.slice(0, -1);
  }
  updateDisplay(values);
}

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
  if (parseFloat(s) === 0 && op === "÷") {
    alert("No division by zero here, yet.");
    return f;
  } else {
    return `${operate(values.op, values.first, values.second)}`;
  }
}
