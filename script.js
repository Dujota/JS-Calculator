// declare necessary elements

const displayEl = document.querySelector('#calc-display');
const numBtns = document.querySelectorAll('.number-button');
const opBtns = document.querySelectorAll('.operation-button');
const eqBtn = document.querySelector('.equals-button');
const resetBtn = document.querySelector('#reset');

// create a handler for the number buttons to add to the calculator display

const text = document.createTextNode('')
displayEl.appendChild(text);

const handleNumAdd = (n) => {
    const num = document.createTextNode(n.target.textContent);
    return displayEl.appendChild(num);
}; 

// create a handler to run the equation on the display and display the

const handleRunEquation = (n) => {
    //save operator
    const operator = 10
    //save numbers and convert to number objects
    const num1 = document.createTextNode(Number(displayEl.textContent.split('+' || '/')[0])); //split at operator
    return console.log(num1)
    //express numbers with operator between them
    // displayEl.textContent = '';
    // return displayEl.appendChild(solution);
};

// create a handler to clear the display

const handleClearDisplay = (n) => {
    // const disp = document.createTextNode(displayEl.target.textContent);
    return displayEl.textContent = ''
};

// listeners
eqBtn.addEventListener('click', handleRunEquation);
opBtns.forEach(el => el.addEventListener('click', handleNumAdd));
numBtns.forEach(el => el.addEventListener('click', handleNumAdd));
resetBtn.addEventListener('click', handleClearDisplay);

// when clicking an operator (only after more digits are added) store operation type as a string
// and allow only numbers following operator digit 
// allow operator overwrite 