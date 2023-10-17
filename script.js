//Note: I was not able to get the buttons to work and I checked many times
//if it had something to do with values I gave to locate them.
//After looking at many of our previous projects and mdn for methods, I
//was not able to get my event listeners and handlers display and I looked for
//other solutions online and tried the eval to calculate it.
//The issue I am facing is not being able to get the buttons to work which
//prevented me moving forward and I used my time to troubleshoot online and
//should have gotten help earlier. I dashed out most of my code that I tried and
//the current one also is not working unfortunately and I didn't even take a
//break and would like to see how its done hopefully

// A user should be able to select numbers so that they can do things with them.
// A user should be able to add numbers together.
// A user should be able to subtract numbers.
// A user should be able to divide numbers.
// A user should be able to multiply numbers together.
// A user should be able to see the output.
//event.currentTarget

const display = document.getElementById("calc-display");
console.log(display);
//const buttons = document.querySelector("[class=number-button]");
const buttons = document.querySelectorAll("button");

console.log(buttons);

let calculation = [];
let result;

function calculate(button) {
  const value = button.textContent;

  if (value == "Reset") {
    calculation = [];
    display.textContent = ".";
  } else if (value === "=") {
    display.textContent = eval(result);
  } else {
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);

//const number = document.querySelector(".number-button");
// const numbers = document.querySelector(".row");
// const operators = document.querySelector(".operation-button");
// const result = document.querySelector(".equals-button");
// const reset = document.querySelector(".reset-button");

// let input = document.getElementById("calc-display");
// //let input = document.querySelectorAll("#calc-display");

// console.log(input);
// let buttons = document.querySelectorAll("button");
// console.log(buttons);

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       string = eval(string);
//       input.value = string;
//     } else if (e.target.innerHTML == "Reset") {
//       string = "";
//       input.value = string;
//     } else {
//       string += e.target.innerHTML;
//       input.value = string;
//     }
//   });
// });

// numbers.addEventListener("click", (e) => {
//   if (e.target.matches("button")) {
//   }
// });

// //equals button event handler
// function equalsButton() {
//   const inputValue = input.innerHTML;
// }
// //equals button event listener
// result.addEventListener("click", equalsButton);

// //reset button event handler
// function resetButton() {
//   input.innerHTML = "";
// }
// //reset button event listener
// reset.addEventListener("click", resetButton);

// function calculator(e) {
//   const numbers = e.target.classList[0];
//   if (document.body.style.button !== numbers) {
//     document.body.style.button = numbers;
//   }
// }

// Event Listeners
//calcButtons.addEventListener("click", calculator);

// const numberOne = document.querySelector("[class=number-button]");
// function chooseNumber(event) {
//   console.log(event);
//   console.log(document.body.classList);
//   const currentClass = document.body.classList.value;
// }
// numberOne.addEventListener("click", chooseNumber);
