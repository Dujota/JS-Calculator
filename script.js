const equals = document.getElementById('=');
const clear = document.getElementById('clear');
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

// Functions 
// number button click 
function numClick(num) {
    if (timeToClear) {
        exp.innerText = "";
        timeToClear = false;
    }
    exp.append(num);
}

// operation click
function opClick(expText,opText) {
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
    // target.classList.add("blue");
    timeToClear = true;
}

// function to run operations
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

// function for clicking equals/return
function equalsClick(expText) {
    if (opIs && expText) {
        n1 = runOp(Number(n1),Number(expText),opIs);
        exp.innerText = n1;
        opIs="";
        timeToClear = true;
    }
}


// Grab numbers and operations in bulk and then split out how they're handled by class
// since other buttons are one-off, their event listener functions are separated out 
frame.addEventListener('click', function(event) {
    let target = event.target;
    if (target.classList.contains("number-button")) {
        const numText = target.innerText;
        numClick(numText);
    } else if (target.classList.contains("operation-button")) {
        let expText = exp.innerText;
        const opText = target.innerText;
        opClick(expText,opText);
    } 
})


// Keydowns 
document.addEventListener('keydown',function(event) {
    let target = event.key;
    if (target > -1) {
        numClick(target);
    } else if (target=='+' || target=='-' || target=='/' || target=='*') {
        let expText = exp.innerText;
        opClick(expText,target);
    } else if (target=='return') {
        let expText = exp.innerText;
        equalsClick(expText);
    }
})

// Clear button clears on click, or operation if number field is already clear
clear.addEventListener('click',function() {
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

// Reset all to default if Reset is clicked
reset.addEventListener('click', function() {
    exp.innerText="";
    opIs="";
    plus.classList.remove("blue");
    minus.classList.remove("blue");
    multiply.classList.remove("blue");
    divide.classList.remove("blue");
    timeToClear = false;
})

// Equals button click handled separately because it only runs if everything 
// is good for it to run; otherwise it doesn't do anything 
equals.addEventListener('click',function() {
    let expText = exp.innerText;
    equalsClick(expText); 
})