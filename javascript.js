function add(val1, val2) {
    return val1 + val2;
}

function subtract(val1, val2) {
    return val1 - val2;
}

function multiply(val1, val2) {
    return val1 * val2;
}

function divide(val1, val2) {
    return val1 / val2;
}

function operate(val1, operator, val2) {
    return operator(Number(val1), Number(val2));
}

function displayNumber(num) {
    if (String(num).length < 10) {
        return num;
    }
    return Number(num).toExponential(5);
}

function getResult() {
    switch (operator.id) {
        case "divide":
            return operate(firstNumber, divide, secondNumber);
            break;
        case "multiply":
            return operate(firstNumber, multiply, secondNumber);
            break;
        case "add":
            return operate(firstNumber, add, secondNumber);
            break;
        case "subtract":
            return operate(firstNumber, subtract, secondNumber);
            break;
    }
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayString = "";

let display = document.querySelector(".display");
let values = document.querySelectorAll(".value");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clearButton");
let back = document.querySelector(".backSpace");

for (let i = 0; i < values.length; i++) {
    const node = values[i];
    node.addEventListener("click", () => {
        if (firstNumber && !operator) {
            firstNumber = "";
        }
        displayString += node.textContent
        display.textContent = displayNumber(displayString);
    });
}

for (let j = 0; j < operators.length; j++) {
    const node = operators[j];
    node.addEventListener("click", () => {
        if (firstNumber && operator) {
            // waiting for equal
            secondNumber = display.textContent;
            let result = getResult();
            display.textContent = displayNumber(result);
            firstNumber = result;
        } else if (!firstNumber && !secondNumber && !operator) {
            // start of new equation
            firstNumber = display.textContent;
        }
        displayString = "";
        secondNumber = "";
        operator = node;
    });
}

equal.addEventListener("click", () => {
    secondNumber = display.textContent;
    display.textContent = displayNumber(getResult());
    firstNumber = "";
    secondNumber = "";
    displayString = "";
    operator = "";
});

clear.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayString = "";
    display.textContent = "";
})

back.addEventListener("click", () => {
    if (display.textContent != "") {
        display.textContent = displayNumber(display.textContent.slice(0, -1));
    }
})