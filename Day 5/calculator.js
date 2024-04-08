function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.substring(0, displayValue.length - 1);
}

function calculate() {
    try {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
    } catch (error) {
    document.getElementById('display').value = 'Error';
    }
}