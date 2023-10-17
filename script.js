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
