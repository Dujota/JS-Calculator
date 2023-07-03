//STATE VARIABLES
console.log("hello");
let result = null
let calculation = "0"
// Caching DOM elements id frame and calc display;  The term event delegation which leverages event bubbling
//const variable
//const introText = document.querySelector('#intro-text'); hashtag for ID and . for classes
//attach event listeners to the frame frame.addeventlistener; Listens for click/interaction with HTML
//UPDATE state after the click is received via an event handler; event.target.innerText
//if anything but not equal to "equal" update the calculation value otherwise update the result
//Result = eval(calculation); Never use eval on the server side have to build own code/logic
//Render via a function that takes the state and displays;  Create a function called render that is called at the end of eventhandler;
//Render at the beginning outside of the eventhandler the "0"
//if there is a result then render it otherwise display the calculation; calculation += event.target;
//handle edge case, if calculation is 0 then it sets to emptystring ""; do this before the update
//const resultsDisplay = document.querySelector ('.frame')
//const calcdisplay = document.querySelector('#frame')
const buttons = document.querySelectorAll('button')
const calcdisplay = document.querySelector('#calc-display')


let inputs = []
let formattedinputs


function calculate(button) {
    const buttonValue = button.textContent
    //console.log(buttonValue)
    //calcdisplay.textContent=buttonValue
    if (buttonValue === "Reset") {
        inputs = []
        calcdisplay.textContent = "0"
    } else if (buttonValue === "=") {
        calcdisplay.textContent = eval(formattedinputs)
    }
    else  {
        inputs.push(buttonValue)
        formattedinputs = inputs.join("")
        calcdisplay.textContent=formattedinputs
    }
   console.log("inputs =", inputs) 
   console.log("formatted inputs", formattedinputs)
}
//buttons.forEach(button => button.addEventListener('click', () => (console.log(button))))
buttons.forEach(button => button.addEventListener('click', () => (calculate(button))))

