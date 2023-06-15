const nums = Array.from(document.getElementsByClassName('number-button'));
const ops = Array.from(document.getElementsByClassName('operation-button'));
const equals = document.getElementById('=');
const reset = document.getElementById('reset');
const exp = document.getElementById('calc-display');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const multiply = document.getElementById('*');
const divide = document.getElementById('/');

// set a state for whether the screen is ready to be cleared
let timeToClear = false;

// we'll save operations for using later, once we've gotten the second number
let opIs = "";
let n1=0;

// digit clicks 
nums.forEach(num => {
    num.addEventListener('click', function() {
        const numText = this.innerText;
        if (timeToClear) {
            exp.innerText = "";
            timeToClear = false;
        }
        exp.append(numText);
    })
})

// Reset button resets on click, or operation if number field is already reset
reset.addEventListener('click',function() {
    if (exp.innerText == "") {
        opIs = "";
        plus.classList.remove("blue");
        minus.classList.remove("blue");
        multiply.classList.remove("blue");
        divide.classList.remove("blue");
    } else {
        exp.innerText = "";
    }
    timeToClear = false;
})

// Equals button click handled separately because it only runs if everything 
// is good for it to run; otherwise it doesn't do anything 
equals.addEventListener('click',function() {
    let expText = exp.innerText;
    if (opIs && expText) {
        n1 = runOp(Number(n1),Number(expText),opIs);
        exp.innerText = n1;
        opIs="";
        timeToClear = true;
    }
})

// Operation clicks - run the calc if it's ready and get the new operation ready.
// otherwise they just get the operation ready and prep a new round of number entry. 
ops.forEach(op => {
    op.addEventListener('click',function() {
        let expText = exp.innerText;
        const opText = this.innerText;
        if (!expText) {
            return
        }
        if (!opIs) {
            n1 = exp.innerText;
        } else {
            n1 = runOp(Number(n1),Number(expText),opIs);
            exp.innerText = n1;
        }
        opIs = opText;
        this.classList.add("blue");
        timeToClear = true;
    });
})

function runOp(n1,n2,op) {    
    switch(op) {
        case '+':
            plus.classList.remove("blue");
            return n1+n2;
        case '-':
            minus.classList.remove("blue");
            return n1-n2;
        case '*':
            multiply.classList.remove("blue");
            return n1*n2;
        case '/':
            divide.classList.remove("blue");
            return n1/n2;
    }                
}