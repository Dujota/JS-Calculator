/* 
Function to add: square root of a number (√)
Function to add: factorial (!)
comments will talk about how I would add it



* add a button for each function in html
* add a new query selector for each button
* I'd need to fix the runOperations function because it's currently
dependent on 2 numbers and one operator
* I'd have to rewrite the function logic to break into another function if it's an operator that only needs 1 input vs 2

*/

const display = document.querySelector('#calc-display');
const numberBtns = document.querySelectorAll('.number-button');
const resetBtn = document.querySelector('#reset');
const operatorBtns = document.querySelectorAll('.operation-button');
const equalsBtn = document.querySelectorAll('.equals-button');
const clearBtn = document.querySelectorAll('.clear-button');
const maxDisplayLength = 12;

var valuesToOperate = [];

const numberSelected = (Event) => {
    if (display.innerText.length == maxDisplayLength) {
        return;
    }
    else if (display.innerText == '0') {
        display.innerText = Event.currentTarget.id;
    }
    else {
        display.innerText += Event.currentTarget.id;
    }
};

const operatorSelected = (Event) => {
    if (display.innerText == '') {
        return;
    }
    else if (valuesToOperate.length == 0) {
        valuesToOperate.push(display.innerText);
    }
    valuesToOperate.push(Event.currentTarget.id);
    clearDisplay(Event);
};

const runOperations = (Event) => {
    valuesToOperate.push(display.innerText);
    clearDisplay(Event);
    let answer = parseFloat(valuesToOperate.pop());
    while (valuesToOperate.length != 0) {
        let next = valuesToOperate.pop();
        if (next == "+") {
            answer += parseFloat(valuesToOperate.pop());
        }
        else if (next == "-") {
            answer = parseFloat(valuesToOperate.pop()) - answer;
        }
        else if (next == "/") {
            answer = parseFloat(valuesToOperate.pop()) / answer;
        }
        else {
            answer = parseFloat(valuesToOperate.pop()) * answer;
        }
    }
    display.innerText = parseFloat(answer).toFixed(2);

    if (display.innerText.slice(-2) == "00") {
        display.innerText = display.innerText.slice(0, -3);
    }
};

const resetCalc = (Event) => {
    clearDisplay(Event);
    valuesToOperate = [];
};

const clearCalc = (Event) => {
    if (display.innerText == '') {
        return;
    }
    display.innerText = '0';
};

const clearDisplay = (Event) => {
    display.innerText = '';
};

resetBtn.addEventListener('click', resetCalc);

for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', numberSelected);
};
for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener('click', operatorSelected);
};
for (let i = 0; i < equalsBtn.length; i++) {
    equalsBtn[i].addEventListener('click', runOperations);
};
for (let i = 0; i < clearBtn.length; i++) {
    clearBtn[i].addEventListener('click', clearCalc);
};