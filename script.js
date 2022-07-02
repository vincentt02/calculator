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
  console.log("updated number");
  displayDiv.innerHTML = Number(currNumber);
};

const takeInput = () => {
  // console.log(Number(event.target.innerHTML));
  if (operatorToPerform == "") {
    clearAll();
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

const takeInputKeyboard = (num) => {
  // console.log(Number(event.target.innerHTML));
  if (operatorToPerform == "") {
    clearAll();
  }
  if (firstInput && num == ".") {
    //if the first input is a decimal keep the 0 in front
    currNumber = currNumber + num;
    updateDisplayedNumber();
    firstInput = false;
    return;
  }
  if (firstInput && num == "0" && firstNumber == null) {
    //if its the first input and the user trys to input a 0 do nothing
    return;
  }
  if (firstInput) {
    //removes the starter 0 and sets firstInput to false
    currNumber = "";
    firstInput = false;
  }
  if (num == "." && currNumber.includes(".")) {
    //if there is already a decimal and the user tries to input a decimal do nothing
    return;
  }

  currNumber = currNumber + num;
  console.log("keyboard input " + num);
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

const clearAll = () => {
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

const takeOperatorKeyboard = (operator) => {
  if (!firstOperator) {
    equate();
    operatorToPerform = operator;
    console.log(operatorToPerform);
    return;
  }
  saveFirstNumber();
  operatorToPerform = operator;
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
  console.log(operatorToPerform + firstNumber + secondNumber);
  result = operate(operatorToPerform, firstNumber, secondNumber);
  console.log(result);
  currNumber = Number(result);
  firstNumber = Number(result); //set firstNumber to the result so that you can do more equations on top
  operatorToPerform = "";
  updateDisplayedNumber();
};

const backspace = () => {
  currNumber = String(currNumber).slice(0, -1);
  console.log("backspace new number " + currNumber);
  if (currNumber == "-") {
    currNumber = 0;
    firstNumber = 0;
  }
  updateDisplayedNumber();
};

const changeSign = () => {
  currNumber = currNumber * -1;
  firstNumber = currNumber;
  updateDisplayedNumber();
};

const clearBtn = document.getElementById("AC");
clearBtn.addEventListener("click", clearAll);

const equalBtn = document.getElementById("equal");
equalBtn.addEventListener("click", equate);

const changeSignBtn = document.getElementById("positiveNegative");
changeSignBtn.addEventListener("click", changeSign);

document.querySelectorAll(".button_numbers").forEach((item) => {
  item.addEventListener("click", takeInput);
});

document.querySelectorAll(".button_operators").forEach((item) => {
  item.addEventListener("click", takeOperator);
});

window.addEventListener("keydown", (e) => {
  if (e.defaultPrevented) {
    return;
  }
  switch (e.key) {
    case "1":
      takeInputKeyboard(1);
      break;
    case "2":
      takeInputKeyboard(2);
      break;
    case "3":
      takeInputKeyboard(3);
      break;
    case "4":
      takeInputKeyboard(4);
      break;
    case "5":
      takeInputKeyboard(5);
      break;
    case "6":
      takeInputKeyboard(6);
      break;
    case "7":
      takeInputKeyboard(7);
      break;
    case "8":
      takeInputKeyboard(8);
      break;
    case "9":
      takeInputKeyboard(9);
      break;
    case "0":
      takeInputKeyboard(0);
      break;
    case ".":
      takeInputKeyboard(".");
      break;
    case "+":
      takeOperatorKeyboard("add");
      break;
    case "-":
      takeOperatorKeyboard("subtract");
      break;
    case "*":
      takeOperatorKeyboard("multiply");
      break;
    case "/":
      takeOperatorKeyboard("divide");
      break;
    case "Enter":
      equate();
      break;
    case "Backspace":
      backspace();
      break;
  }
});

updateDisplayedNumber();
