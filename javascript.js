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

let firstNumber;
let secondNumber;
let operator;

function operate(val1, operator, val2) {
    return operator(val1, val2);
}

let displayString = "";

values = document.querySelectorAll(".value");
display = document.querySelector(".display");


for (let i = 0; i < values.length; i++) {
    const node = values[i];
    node.addEventListener("click", () => {
        displayString += node.textContent;
        display.textContent = displayString;
    });
}

// buttonNames = []
// let displayString = "";

// for (let )