// UI

let display = document.querySelector("calc-display");

const keys = document.querySelectorAll(".number-button");

let operators = document.querySelectorAll(".operation-button")

function operations(e) {
    const whatThis = e.target.classList[0];
    console.log(whatThis);
    display.innerHTML += parseInt(e.target.innerHTML);

}
//if a reset, clear or delete

// Event Listeners

console.log(keys);
keys.forEach((e) => { e.addEventListener('click', operations)
});
