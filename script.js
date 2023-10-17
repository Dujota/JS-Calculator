let display = document.querySelector("calc-display");

const keys = document.querySelectorAll(".number-button".data);


// const keys = document.querySelectorAll("button");
// const keys = document.querySelectorAll(button=[type="button"]);


// let operators = document.querySelector(".operation-button")
let operators = document.querySelectorAll(".operation-button")

function operations(e) {
    console.log(e.target.innerHTML);
    // return display += display.innerHTML;

}
//if a reset, clear or delete

// Event Listeners

console.log(keys);
keys.addEventListener('click', operations);


// console.log(parseInt(nums.innerHTML) + operators.innerHTML + parseInt(nums.innerHTML)); // test see if the operator works
// console.log(nums1);
// console.log(operators.innerHTML);
// document.querySelector("calc-display").innerHTML;
