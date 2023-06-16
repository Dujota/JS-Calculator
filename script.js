const sevenBtn=document.querySelector("#7");
const eightBtn=document.querySelector("#8");
const nineBtn=document.querySelector("#9");
const slashBtn=document.querySelector("#/");
const fourBtn=document.querySelector("#4");
const fiveBtn=document.querySelector("#5");
const sixBtn=document.querySelector("#6");
const starBtn=document.querySelector("#*");
const oneBtn=document.querySelector("#1");
const twoBtn=document.querySelector("#2");
const threeBtn=document.querySelector("#3");
const dashBtn=document.querySelector("#-");
const zeroBtn=document.querySelector("#0");
const dotBtn=document.querySelector("#.");
const plusBtn=document.querySelector("#+");
const equalBtn=document.querySelector("#=");
const resetBtn=document.querySelector("#reset");
const display=document.querySelector("#calc-display");
const numberBtn=document.querySelector(".number-button");
const opBtn=document.querySelector(".operation-button");


//event handlers

const displayText=(event)=>{
    display.innerHTML="hello"
    console.log(event)
}


//eventListeners
numberBtn.addEventListener("click", displayText);