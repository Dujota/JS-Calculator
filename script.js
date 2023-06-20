//Selector Variables
const numberButtons = document.querySelectorAll(".number-button");
const operationsButtons = document.querySelectorAll(".operation-button");
const decimalButton = document.querySelector(".decimal-button");
const calcDisplay = document.getElementById("calc-display");
const resetButton = document.querySelector(".reset-button");
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

/**2. Wouldn't it be nice if the user could use their keyboard? How can you set even listners on a `keyup` or `keydown`?
    I would do the following to accomplish this prompt if I had more time:
        a) create an event listener for all buttons for 'keyup' or 'keydown'
        b) assign a keyboard button to be the reset button
        c) create if/else if/else conditions that would listen for whether a number, operator, decimal, the equal button, or a the reset button was clicked
        d) add the functions I currently have for numsSaved(), decimalSaved(), opsSaved(), mathOperations(), and reset() into the corresponding conditionals based on what is clicked on the keyboard

3. Once you have the basics of the calculator working, look back at your code. You want to make it [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).  Start to refactor your code to take out unneeded parts or implement something in a better way.
    If I had more time, I would like to see if there was a way to create shorter functions OR less funtions in order to carry out the same operations

4. What other operations can you add to the calculator? If you have time, implement them. If you don't have time, but have some ideas, add comments to your code about what you'd like to add. How might you implement them? Is your code friendly to adding in new operations if another developer came in to add something to your code?
    If I had more time, I would add parenthesis to the calculator to run more complex math equations and additionally I would add some more math operations like square root and exponents. I would create new buttons for those and give them the class of operators so that they also work in the array with the opsSaved function

5. Can you save the results somewhere? Look into `localStorage`.
    https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage 

*/