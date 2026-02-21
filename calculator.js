const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "Invalid, Cannot Divide by 0"

function operator(a, b, func) {
    return func(a, b);
}
let firstNumber = "";
let currentOperator = null;
let waitingForSecondNumber = false;

const dply = document.querySelector('.display');
const main = document.querySelector('.main');

// 2. Add one listener to the whole container
let currentInput = "0";

main.addEventListener('click', (event) => {
    const target = event.target;
    const value = target.textContent;

    // 1. If it's a number or an operator (+, -, *, /)
    if (target.classList.contains('number') && value !== '=' && value !== 'C') {
        if (currentInput === "0") {
            currentInput = value; // Replace the initial zero
        } else {
            currentInput += value; // Keep building the string (e.g., "12+5")
        }
        dply.textContent = currentInput;
    }

    // 2. The Equals logic
    if (value === '=') {
        try {
            // We use a custom parser or eval to solve the string
            // For a simple version, we can use the Function constructor:
            const result = new Function('return ' + currentInput)();

            dply.textContent = result;
            currentInput = result.toString(); // Allow further math on the result
        } catch (error) {
            dply.textContent = "Error";
            currentInput = "0";
        }
    }

    // 3. Clear logic
    if (value === 'C') {
        currentInput = "0";
        dply.textContent = "0";
    }
});