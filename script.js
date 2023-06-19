//Selector Variables
const numberButtons = document.querySelectorAll(".number-button");
const operationsButtons = document.querySelectorAll(".operation-button");
const calcDisplay = document.getElementById("calc-display");
const resetButton = document.querySelector(".reset-button");
let array =[];




const numAndOpsSaved = ()=>{
    for (let i=0; i<numberButtons.length; i++){
        numberButtons[i].addEventListener('click',event=>{
            let numsValue=numberButtons[i].value;
            calcDisplay.innerText=numsValue;
            array.push(numsValue);
        })
    }

    for (let i=0; i<operationsButtons.length; i++){
        operationsButtons[i].addEventListener('click',event=>{
            let opsValue=operationsButtons[i].value;
            calcDisplay.innerText=opsValue;
            array.push(opsValue);
        })
    }
}
numAndOpsSaved()

const reset =()=>{
    resetButton.addEventListener('click', event=>{
        let array =[];
        console.log(array);
    })
}
reset()

//got to create a function that reduces an array with operations that also makes sure the vales are not strings but numbers and operators
//then put the display array on the calcDisplay
//for the reset button, empty out out the array and disply the emptyness
//have a function that triggers the operator display only when the = button is clicked
