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
  if (y == 0) {
    return "cannot divide by 0";
  }
  return x / y;
};

const operate = (operator, x, y) => {
  switch (operator) {
    case "add":
      return add(x, y);
      break;
    case "subtract":
      return subtract(x, y);
      break;
    case "multiply":
      return multiply(x, y);
      break;
    case "divide":
      return divide(x, y);
      break;
  }
};

let currNumber = "0";

let firstInput = true;
let firstOperator = true;

var firstNumber;
var secondNumber;

let operatorToPerform = "";

const displayDiv = document.getElementById("display");
const updateDisplayedNumber = () => {
  displayDiv.innerHTML = Number(currNumber);
};

const takeInput = () => {
  // console.log(Number(event.target.innerHTML));
  if (operatorToPerform == "") {
    clear();
  }
  if (firstInput && event.target.innerHTML == ".") {
    //if the first input is a decimal keep the 0 in front
    currNumber = currNumber + event.target.innerHTML;
    updateDisplayedNumber();
    firstInput = false;
    return;
  }
  if (firstInput && event.target.innerHTML == "0" && firstNumber == null) {
    //if its the first input and the user trys to input a 0 do nothing
    return;
  }
  if (firstInput) {
    //removes the starter 0 and sets firstInput to false
    currNumber = "";
    firstInput = false;
  }
  if (event.target.innerHTML == "." && currNumber.includes(".")) {
    //if there is already a decimal and the user tries to input a decimal do nothing
    return;
  }

  currNumber = currNumber + event.target.innerHTML;
  console.log(currNumber);
  updateDisplayedNumber();
};

const saveFirstNumber = () => {
  firstNumber = Number(currNumber); //save the currentNumber to firstNumber
  // currNumber = "0"; //reset the display
  // updateDisplayedNumber();
  firstInput = true; //now the next input will be the first input
};

const saveSecondNumber = () => {
  secondNumber = Number(currNumber);
  currNumber = "0";
  updateDisplayedNumber();
  firstInput = true;
};

const clear = () => {
  currNumber = "0";
  updateDisplayedNumber();
  firstInput = true;
  firstOperator = true;
  firstNumber = null;
  secondNumber = null;
  operatorToPerform = null;
};

const takeOperator = () => {
  // console.log(event.target.id);
  if (!firstOperator) {
    equate();
    operatorToPerform = event.target.id;
    console.log(operatorToPerform);
    return;
  }
  saveFirstNumber();
  operatorToPerform = event.target.id;
  firstOperator = false;
  console.log(operatorToPerform);
};

const equate = () => {
  let result = 0;
  if (firstNumber == null) {
    return;
  }
  if (operatorToPerform == "") {
    return;
  }
  saveSecondNumber();
  console.log(firstNumber + " " + secondNumber);

  result = operate(operatorToPerform, firstNumber, secondNumber);
  console.log(result);
  currNumber = result;
  firstNumber = result; //set firstNumber to the result so that you can do more equations on top
  operatorToPerform = "";
  updateDisplayedNumber();
};

const changeSign = () => {
  // if (Math.sign(currNumber) == 1) {
  //   console.log("positive");
  //   currNumber = currNumber * -1;
  // } else if (Math.sign(currNumber) == -1) {
  //   currNumber = currNumber * -1;
  //   console.log("negative");
  // }
  currNumber = currNumber * -1;
  firstNumber = currNumber;
  updateDisplayedNumber();
};

const clearBtn = document.getElementById("AC");
clearBtn.addEventListener("click", clear);
const divideBtn = document.getElementById("divide");
divideBtn.addEventListener("click", takeOperator);
const multiplyBtn = document.getElementById("multiply");
multiplyBtn.addEventListener("click", takeOperator);
const subtractBtn = document.getElementById("subtract");
subtractBtn.addEventListener("click", takeOperator);
const addBtn = document.getElementById("add");
addBtn.addEventListener("click", takeOperator);
const equalBtn = document.getElementById("equal");
equalBtn.addEventListener("click", equate);

const zeroBtn = document.getElementById("zero");
zeroBtn.addEventListener("click", takeInput);
const oneBtn = document.getElementById("one");
oneBtn.addEventListener("click", takeInput);
const twoBtn = document.getElementById("two");
twoBtn.addEventListener("click", takeInput);
const threeBtn = document.getElementById("three");
threeBtn.addEventListener("click", takeInput);
const fourBtn = document.getElementById("four");
fourBtn.addEventListener("click", takeInput);
const fiveBtn = document.getElementById("five");
fiveBtn.addEventListener("click", takeInput);
const sixBtn = document.getElementById("six");
sixBtn.addEventListener("click", takeInput);
const sevenBtn = document.getElementById("seven");
sevenBtn.addEventListener("click", takeInput);
const eightBtn = document.getElementById("eight");
eightBtn.addEventListener("click", takeInput);
const nineBtn = document.getElementById("nine");
nineBtn.addEventListener("click", takeInput);
const decimalBtn = document.getElementById("decimal");
decimalBtn.addEventListener("click", takeInput);
const changeSignBtn = document.getElementById("positiveNegative");
changeSignBtn.addEventListener("click", changeSign);

updateDisplayedNumber();
