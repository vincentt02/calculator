const add = (x, y) => {
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  return x / y;
};

const operate = (operator, x, y) => {
  switch (operator) {
    case "add":
      add(x, y);
      break;
    case "subtract":
      subtract(x, y);
      break;
    case "multply":
      multiply(x, y);
      break;
    case "divide":
      divide(x, y);
      break;
  }
};
