function operate(op, a, b) {
  a = parseFloat(a).toFixed(5);
  b = parseFloat(b).toFixed(5);
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
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export default operate;
