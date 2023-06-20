const display = document.querySelector('#calc-display');
const numberBtns = document.querySelectorAll('.number-button');
const resetBtn = document.querySelector('#reset');
const operatorBtns = document.querySelectorAll('.operation-button');
const equalsBtn = document.querySelectorAll('.equals-button');
const maxDisplayLength = 12;

var valuesToOperate = [];

const numberSelected = (Event) => {
    if (display.innerText.length == maxDisplayLength) {
        return;
    }
    display.innerText += Event.currentTarget.id;
};

const operatorSelected = (Event) => {
    console.log(valuesToOperate);
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
    valuesToOperate.push(display.innerText);
};

const resetCalc = (Event) => {
    clearDisplay(Event);
    valuesToOperate = [];
}
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
