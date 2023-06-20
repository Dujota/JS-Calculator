//Selector Variables
const numberButtons = document.querySelectorAll(".number-button");
const operationsButtons = document.querySelectorAll(".operation-button");
const decimalButton = document.querySelector(".decimal-button");
const calcDisplay = document.getElementById("calc-display");
const resetButton = document.querySelector(".reset-button");
const addBtn = document.getElementById("+");
const subBtn = document.getElementById("-");
const multBtn = document.getElementById("*");
const divBtn = document.getElementById("/");
const equalBtn = document.getElementById("=");
let array=[];

/** the function below listens for when numbers are clicked, then it saves the value of the numbers clicked and appends the text in HTML*/
const numsSaved = ()=>{
    for (let i=0; i<numberButtons.length; i++){
        numberButtons[i].addEventListener('click',event=>{
            let numsValue=numberButtons[i].value;
            calcDisplay.append(numsValue);
            array.push(Number(numsValue));
        })
    }
}
const decimalSaved = ()=>{
        decimalButton.addEventListener('click',event=>{
            let decimalValue=decimalButton.value;
            calcDisplay.append(decimalValue);
            array.push(decimalValue);
        })
}
/** the function below listens for when operators are clicked, then it saves the value of the operations clicked and appends the text in HTML*/
const opsSaved =()=>{
    for (let i=0; i<operationsButtons.length; i++){
        operationsButtons[i].addEventListener('click',event=>{
            let opsValue=operationsButtons[i].value;
            calcDisplay.append(opsValue);
            array.push(opsValue);
        })
    }
}
/**Join the array elements and evaluate the contents - this creates the math part*/
const mathOperations =()=>{
    equalBtn.addEventListener('click', event=>{
        let joinedArray = array.join('');
        let operations = eval(joinedArray);
        calcDisplay.innerText = operations;
    })
}
/**Reset function below */
const reset = ()=>{
    resetButton.addEventListener('click', event=>{
        array.length = 0;
        calcDisplay.innerText=array;
    })
}
const numAndOpsSaved = ()=>{
    numsSaved()
    decimalSaved()
    opsSaved()
    mathOperations()
    reset()
}
numAndOpsSaved()
