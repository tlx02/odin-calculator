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
        if (firstNumber != "" && operator == "") {
            firstNumber = "";
        }
        displayString += node.textContent;
        display.textContent = displayString;
    });
}

for (let j = 0; j < operators.length; j++) {
    const node = operators[j];
    node.addEventListener("click", () => {
        if (firstNumber != "") {
            equal.click();
        } else {
            firstNumber = displayString;
        }
        displayString = "";
        operator = node;
    });
}

equal.addEventListener("click", () => {
    secondNumber = displayString;
    switch (operator.id) {
        case "divide":
            displayString = operate(firstNumber, divide, secondNumber);
            break;
        case "multiply":
            displayString = operate(firstNumber, multiply, secondNumber);
            break;
        case "add":
            displayString = operate(firstNumber, add, secondNumber);
            break;
        case "subtract":
            displayString = operate(firstNumber, subtract, secondNumber);
            break;
    }
    display.textContent = displayString;
    firstNumber = displayString;
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
        display.textContent = display.textContent.slice(0, -1);
        displayString = displayString.slice(0, -1);
    }
})