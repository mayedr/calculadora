let displayValue = '0';
let operator = null;
let previousValue = null;
let shouldResetDisplay = false;

const displayElement = document.getElementById('display');

function updateDisplay() {
    displayElement.textContent = displayValue;
}

function appendNumber(number) {
    if (displayValue === '0' || shouldResetDisplay) {
        displayValue = number;
        shouldResetDisplay = false;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    previousValue = displayValue;
    shouldResetDisplay = true;
}

function calculate() {
    let result = 0;
    const currentNumber = parseFloat(displayValue);
    const previousNumber = parseFloat(previousValue);

    if (operator === '+') {
        result = previousNumber + currentNumber;
    } else if (operator === '-') {
        result = previousNumber - currentNumber;
    } else if (operator === '*') {
        result = previousNumber * currentNumber;
    } else if (operator === '/') {
        result = previousNumber / currentNumber;
    }

    displayValue = result.toString();
    operator = null;
    previousValue = null;
    shouldResetDisplay = true;
    updateDisplay();
}

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        if (value === 'C') {
            displayValue = '0';
            operator = null;
            previousValue = null;
            shouldResetDisplay = false;
        } else if (value === '=') {
            calculate();
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            setOperator(value);
        } else {
            appendNumber(value);
        }
        updateDisplay();
    });
});

updateDisplay();
