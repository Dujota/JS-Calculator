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

// Fill in the calc field with the number in local storage 
window.addEventListener('load', (e) => {
    exp.innerText = localStorage.getItem('display_num');
    opIs = localStorage.getItem('active_operation');
    n1 = localStorage.getItem('n1');
    timeToClear = localStorage.getItem('time_to_clear');
    if (opIs) {
        document.getElementById(opIs).classList.add('blue');
    }
})

// Functions 
// number button click 
function numClick(num) {
    if (timeToClear) {
        exp.innerText = "";
        timeToClear = false;
        localStorage.removeItem('display_num');
        localStorage.setItem('time_to_clear',false);
    }
    exp.append(num);
    localStorage.setItem('display_num',exp.innerText);
}

// operation click
function opClick(expText,opText) {
    if (!expText) {
        return
    }
    if (!opIs) {
        n1 = exp.innerText;
        localStorage.setItem('n1',n1);
    } else {
        n1 = runOp(Number(n1),Number(expText),opIs);
        exp.innerText = n1;
        localStorage.setItem('display_num',exp.innerText);
        localStorage.setItem('n1',n1);
    }
    opIs = opText;
    localStorage.setItem('active_operation',opIs);
    localStorage.setItem('time_to_clear',true);
    return timeToClear = true;
}

// function for clicking equals/return
function equalsClick(expText) {
    if (opIs && expText) {
        n1 = runOp(Number(n1),Number(expText),opIs);
        exp.innerText = n1;
        opIs="";
        timeToClear = true;
        localStorage.setItem('active_operation',opIs);
        localStorage.setItem('time_to_clear',true);
    }
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

//------


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
        if (timeToClear) {
            target.classList.add("blue");
        }
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
        if (timeToClear) {
            const targetButton = document.getElementById(target);
            targetButton.classList.add("blue");
        }
    } else if (target=='Enter') {
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
        localStorage.clear();
    } else {
        exp.innerText = "";
        localStorage.removeItem('display_num');
    }
    timeToClear = false;
    localStorage.setItem('time_to_clear',false);
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
    localStorage.clear();
})

// Equals button click handled separately because it only runs if everything 
// is good for it to run; otherwise it doesn't do anything 
equals.addEventListener('click',function() {
    let expText = exp.innerText;
    equalsClick(expText); 
})