const dot = document.getElementById("dot");
const n0 = document.getElementById("n0");
const n00 = document.getElementById("n00");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");
const n5 = document.getElementById("n5");
const n6 = document.getElementById("n6");
const n7 = document.getElementById("n7");
const n8 = document.getElementById("n8");
const n9 = document.getElementById("n9");
// const mrc = document.getElementById("mrc");
// const mSub = document.getElementById("mSub");
// const mPLus = document.getElementById("mPLus");
const remainder = document.getElementById("remainder");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const sqrt = document.getElementById("sqrt");
const equal = document.getElementById("equal");
const off = document.getElementById("off");
const clear = document.getElementById("clear");
const on = document.getElementById("on");
const lastOp = document.querySelector(".lastOperation");
const currentOp = document.querySelector(".currentOperation");
let inputButtons = [n0, n00, n1, n2, n3, n4, n5, n6, n7, n8, n9];
let resetButtons = [clear, on, off];
let operations = [add, subtract, divide, multiply, remainder];
let operationDone = false;
let result = 0;
let firstNumb = 0;
let secondNumb = 0;
let operation;
let isOn = true;
let float = true;
let first = true;
let firstOperand = true;
let firstEquation = true;
let cnt = 0;

function turnOff() {
  currentOp.textContent = "\u00A0";
  lastOp.textContent = "\u00A0";
  isOn = false;
}

function clearAll() {
  if (!isOn) {
    alert("Please turn the calculator on.");
  } else {
    turnOn();
  }
}

function turnOn() {
  lastOp.textContent = "\u00A0";
  currentOp.textContent = "0";
  isOn = first = firstOperand = firstEquation = float = true;
  operationDone = false;
  result = firstNumb = secondNumb = cnt = 0;
}

resetButtons.forEach((element) => {
  element.addEventListener("click", () => {
    switch (element) {
      case clear: {
        clearAll();
        break;
      }
      case off: {
        turnOff();
        break;
      }
      case on: {
        turnOn();
        break;
      }
      default:
        break;
    }
  });
});

inputButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (currentOp.textContent.length > 12) {
      alert("You have reached the maximum number length");
    } else {
      if (isOn) {
        if (currentOp.textContent === "0") {
          currentOp.textContent = "\u00A0";
        }
        currentOp.textContent += element.value;
      } else {
        alert("Please turn the calculator on.");
      }
    }
  });
});

dot.addEventListener("click", () => {
  if (float) {
    float = false;
    currentOp.textContent += dot.value;
  }
});

function calculateResult(firstNumb, secondNumb, operation) {
  if (operation === "-") {
    result = firstNumb - secondNumb;
  } else if (operation === "+") {
    result = parseInt(firstNumb) + parseInt(secondNumb);
  } else if (operation === "÷") {
    result = firstNumb / secondNumb;
  } else if (operation === "×") {
    result = parseInt(firstNumb) * parseInt(secondNumb);
  } else if (operation === "%") {
    result = firstNumb % secondNumb;
  }
}

function getResult(firstNumb, secondNumb, operation) {
  calculateResult(firstNumb, secondNumb, operation);
  lastOp.textContent = `${firstNumb}${operation}${secondNumb}=${result}`;
  currentOp.textContent = result;
  firstNumb = result;
}

function writePreOp(operation) {
  currentOp.textContent = "\u00A0";
  lastOp.textContent = "\u00A0";
  lastOp.textContent = `${firstNumb}${operation}`;
}

function doOperation(element) {
  if (isOn) {
    operation = element.value;
    //lw awl mra ydkhl khales
    //lw awl mra y3ml equation
    //b3d kda bmshy 3la nfs el rate, ydos el button, yktb rakm, ynfz operation
    if (firstOperand) {
      firstNumb = getCurrentNumber();
      writePreOp(operation);
      firstOperand = false;
    } else {
      secondNumb = getCurrentNumber();
      getResult(firstNumb, secondNumb, operation);
      writePreOp(operation);
    }
  } else {
    alert("Please turn the calculator on.");
  }
}

equal.addEventListener("click", () => {
  if (isOn) {
    if (currentOp.childNodes.length != 0 && lastOp.childNodes.length != 0) {
      secondNumb = getCurrentNumber();
      getResult(firstNumb, secondNumb, operation);
    }
  } else {
    alert("Please turn the calculator on.");
  }
});

operations.forEach((element) => {
  element.addEventListener("click", () => {
    doOperation(element);
  });
});

function getCurrentNumber() {
  let s = currentOp.textContent;
  return parseInt(s.replace(/\s/g, ""));
}
