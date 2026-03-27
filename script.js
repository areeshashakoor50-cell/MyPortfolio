let display = document.getElementById('display');
let currentInput = '';

function press(val) {
    currentInput += val;
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch(e) {
        display.value = "Error";
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}
