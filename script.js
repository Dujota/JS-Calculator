// UI
let display = document.querySelector("calc-display");

const keys = document.querySelectorAll(".number-button");

let operators = document.querySelectorAll(".operation-button")

// Event Handlers
function operations(e) {
    display.innerHTML += parseInt(e.target.innerHTML);

}
//if a reset, clear or delete

// Event Listeners
keys.forEach((e) => { e.addEventListener('click', operations)
});
