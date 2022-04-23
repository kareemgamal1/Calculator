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

let isOn = true;

function turnOn() {
  lastOp.textContent = "‏‏‎ ‎";
  currentOp.textContent = "0";
  isOn = true;
}
function turnOff() {
  currentOp.textContent = "‏‏‎ ‎";
  lastOp.textContent = "‏‏‎ ‎";
  isOn = false;
}
function clearAll() {
  if (!isOn) {
    alert("Please turn the calculator on.");
  } else {
    turnOn();
  }
}

let resetButtons = [clear, on, off];
resetButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element == clear) {
      clearAll();
    } else if (element == off) {
      turnOff();
    } else if (element == on) {
      turnOn();
    }
  });
});

let inputButtons = [dot, n0, n00, n1, n2, n3, n4, n5, n6, n7, n8, n9];
inputButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (isOn) {
      if (currentOp.textContent === "0") {
        currentOp.textContent = "‏‏‎ ‎";
        currentOp.textContent += element.value;
      } else currentOp.textContent += element.value;
    } else {
      alert("Please turn the calculator on.");
    }
  });
});

function doOperation(element) {
  if (isOn) {
    lastOp.textContent = "‏‏‎ ‎";
    lastOp.textContent += currentOp.textContent;
    lastOp.textContent += element.value;
    let a = getPreviousNumber();
    let b = getCurrentNumber();
    let o = getPreviousOperation();
    currentOp.textContent = "‏‏‎ ‎";
    console.log(a, b, o);
  } else {
    alert("Please turn the calculator on.");
  }
}

let operations = [add, subtract, divide, multiply, remainder];
operations.forEach((element) => {
  element.addEventListener("click", () => {
    doOperation(element);
  });
});
function addOp(a, b) {
  return a + b;
}
function getCurrentNumber() {
  let s = currentOp.textContent;
  return s;
}
function getPreviousNumber() {
  let s = lastOp.textContent;
  return s.slice(0, -1);
}
function getPreviousOperation() {
  let s = lastOp.textContent;
  return s.charAt(s.length - 1);
}
