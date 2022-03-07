function operate(op, a, b) {
  a = parseNum(a);
  b = parseNum(b);
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
  }
}

// ARITHMETIC FUNCTIONS
const add = (a, b) => parseNum(a + b);
const subtract = (a, b) => parseNum(a - b);
const multiply = (a, b) => parseNum(a * b);
const divide = (a, b) => parseNum(a / b);

export default operate;

// PARSE FUNCTION
function parseNum(n) {
  return parseFloat(n).toFixed(5);
}
