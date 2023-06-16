//Reset and Display Variables
const resetBtn = document.getElementById("reset");
const display = document.getElementById("calc-display");

//Operations Variables
// const equalBtn = document.getElementById("=");
// const decimalBtn = document.getElementById(".");
// const plusBtn = document.getElementById("+");
// const minusBtn = document.getElementById("-");
// const multiplyBtn = document.getElementById("*");
// const divideBtn = document.getElementById("/")

//Number Variables
const zeroBtn = document.getElementById("0");
const oneBtn = document.getElementById("1");
const twoBtn = document.getElementById("2");
const threeBtn = document.getElementById("3");
const fourBtn = document.getElementById("4");
const fiveBtn = document.getElementById("5");
const sixBtn = document.getElementById("6");
const sevenBtn = document.getElementById("7");
const eightBtn = document.getElementById("8");
const nineBtn = document.getElementById("9");

//Number Buttons and Operations Buttons
const numberButtons = document.querySelector(".number-button");
const operationButtons = document.querySelector(".operation-button");


//Display Information
const displayInfo = 

numberButtons.addEventListener('click', e =>{
    console.log(e);
    console.log("clicked")
    display.innerHTML= "hello";
});
