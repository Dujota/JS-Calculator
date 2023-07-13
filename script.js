//Element Selectors
const frame = document.querySelector("#frame");
const operationButton = document.querySelector("#operation-button");
const display = document.querySelector("#calc-display");
//const numberButton = document.querySelector(".number-button");
const numberButton = document.querySelectorAll(".number-button");
// const equalsButton = document.querySelector(".equals-button");
// const resetButton = document.querySelector(".reset-button");


//State
let input = "0";
let result = null;

//Event Handlers
const press8 = () => {
    alert("You just use the DOM to identify a element, then added an Event Listener to wait for the click, the created a function to display and alert after the click.");
}

const buttonClicked = (event) => {
    console.log(event.target);
    if (input === "0") {
        input = ""
    }
    if (event.target.innerText === "=") {
        console.log(input);
        console.log(result, eval(input));
        result = eval(input);
        console.log(result);
      } else {
        input += event.target.innerText;
      }
    render();
}


function render() {
    if (result === null) {
        display.innerHTML = `${input}`
    } else {
        display.innerHTML= `${result}`
        console.log(result)

    }
}
render()


const numberClicked = (event) => {
    console.log(numberClicked);
}


// if (event.target.className === "number-button") {
//     let firstClick = `${event.target.innerText}`;
//     //display.innerHTML = firstClick
//     //display.innerHTML = `${event.target.innerText}`
    
// }
// if (event.target.className === "operation-button") {
//     let operationClick = `${event.target.innerText}`;
//     console.log(operationClick);
//     display.innerHTML = operationClick;

    //display.innerHTML = `${event.target.innerText}`;

// function myFunction(event) {
//     let numberClicked = event.currentTarget;
// }

//    display.innerHTML=numberClicked;

    //document.querySelector("#calc-display").innerHTML = event;


//Event Listeners
frame.addEventListener("click", buttonClicked);
//numberButton.addEventListener("click", press8);
//numberButton.addEventListener("click", numberClicked);
// equalsButton.addEventListener("click", equalsClicked);
// resetButton.addEventListener("click", resetClicked);
