let calcDisplay = document.querySelector("#calc-display");
let butID = document.querySelectorAll("button")
let prevNum = "";
let nextNum = 0;
let operatorsVal = "+";

function display(){
nextNum = this.getAttribute('id');
switch (nextNum) {
    case '1':
    nextNum = 1;
    numSequence();
    break;

    case '2':
    nextNum = 2;
    numSequence();
    break;
    
    case '3':
    nextNum = 3;
    numSequence();
    break;

    case '4':
    nextNum = 4;
    numSequence();
    break;

    case '5':
    nextNum = 5;
    numSequence();
    break;

    case '6':
    nextNum = 6;
    numSequence();
    break;

    case '7':
    nextNum = 7;
    numSequence();
    break;

    case '8':
    nextNum = 8;
    numSequence();
    break;

    case '9':
    nextNum = 9;
    numSequence();
    break;

    case '0':
    nextNum = 0;
    numSequence();
    break;       
}        
function numSequence(){
    prevNum = `${prevNum}${nextNum}`;
    calcDisplay.innerHTML = prevNum;
}
}

function equals(){
    calcDisplay.innerHTML = eval(prevNum);
}

function divide(){
    prevNum = `${prevNum}/`;
    calcDisplay.innerHTML = prevNum;
}
function multiply(){
    prevNum = `${prevNum}*`;
    calcDisplay.innerHTML = prevNum;
}
function subtract(){
    prevNum = `${prevNum}-`;
    calcDisplay.innerHTML = prevNum;
}
function add(){
    prevNum = `${prevNum}+`;
    calcDisplay.innerHTML = prevNum;
}
function decimal(){
    prevNum = `${prevNum}.`;
    calcDisplay.innerHTML = prevNum;
}
function reset(){
    prevNum = ""
    calcDisplay.innerHTML = prevNum;
}

document.getElementById("1").addEventListener("click", display);
document.getElementById("2").addEventListener("click", display);
document.getElementById("3").addEventListener("click", display);
document.getElementById("4").addEventListener("click", display);
document.getElementById("5").addEventListener("click", display);
document.getElementById("6").addEventListener("click", display);
document.getElementById("7").addEventListener("click", display);
document.getElementById("8").addEventListener("click", display);
document.getElementById("9").addEventListener("click", display);
document.getElementById("0").addEventListener("click", display);
document.getElementById("/").addEventListener("click", divide);
document.getElementById("*").addEventListener("click", multiply);
document.getElementById("-").addEventListener("click", subtract);
document.getElementById("+").addEventListener("click", add);
document.getElementById(".").addEventListener("click", decimal);
document.getElementById("=").addEventListener("click", equals);
document.getElementById("reset").addEventListener("click", reset);
