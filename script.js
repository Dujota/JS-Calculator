// variables
const divide = document.getElementById('/')
const multiply = document.getElementById('*')
const minus = document.getElementById('-')
const plus = document.getElementById('+')
const equals = document.getElementById('=')
const reset = document.getElementById('reset')
const numberButtons = document.querySelectorAll('.number-button')
const displayEl = document.getElementById('calc-display')

// state
let val1 = 0;
let val2 = 0;
let currentOperation = null;

document.addEventListener("DOMContentLoaded", function () {
    // make sure buttons have values based on thier id
    function setNumberButtonValues() {
        numberButtons.forEach(button => {
            const numericValue = button.id;
            button.value = numericValue;
        });
    }

    // add value to display element
    function addValueToDisplay(buttonValue) {
        displayEl.innerText += buttonValue;
    }

    // reset display screen
    function resetDisplay() {
        displayEl.innerText = ''
    }

    // perform operetion based on /,*,+, or - after we already stored val1
    function performOperation() {
        val2 = parseFloat(displayEl.innerText);
        switch (currentOperation) {
            case '/':
                if (val2 !== 0) {
                    displayEl.innerText = (val1 / val2).toString();
                } else {
                    displayEl.innerText = 'No way, Jose';
                }
                break;
            case '*':
                displayEl.innerText = (val1 * val2).toString();
                break;
            case '-':
                displayEl.innerText = (val1 - val2).toString();
                break;
            case '+':
                displayEl.innerText = (val1 + val2).toString();
                break;
            default:
                break;
        }
        val1 = 0;
        val2 = 0;
        currentOperation = null;
    }

    setNumberButtonValues();

    document.addEventListener('click', function(event) {
        const clickedElement = event.target;

        if (clickedElement.classList.contains('number-button')) {
            const buttonValue = clickedElement.value;
            addValueToDisplay(buttonValue);
            console.log("Clicked button value:", buttonValue);
        } else if (clickedElement === divide || clickedElement === multiply || clickedElement === minus || clickedElement === plus) {
            currentOperation = clickedElement.id;
            val1 = parseFloat(displayEl.innerText);
            resetDisplay();
            console.log(val1, currentOperation);
        } else if (clickedElement === equals) {
            performOperation();
        } else if (clickedElement === reset) {
            resetDisplay();
            val1 = 0;
            val2 = 0;
            currentOperation = null;
        }
    });
});