const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "Invalid, Cannot Divide by 0"

function operator(a, b, func) {
    return func(a, b);
}

console.log(operator(4, 0, divide));