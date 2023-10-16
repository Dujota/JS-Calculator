const h2El = document.querySelector('h2');
const numBtnEl = document.querySelectorAll('.number-button');
const opBtnEl = document.querySelectorAll('.operation-button');
const eqBtnEl = document.querySelector('.equals-button');
const resetBtnEl = document.querySelector('.reset-button');

function displayNum(e) {
    const text = e.target.id
    display = h2El.innerText + text
    h2El.innerText = display
}

numBtnEl.forEach(btn => {
    btn.addEventListener('click', displayNum)
})

function calculateNum(e) {
    num = parseFloat(h2El.innerText)
    if (e.target.id === "/") {
        console.log(e.target.id)
    } else if (e.target.id === "*") {
        console.log(e.target.id)
    } else if (e.target.id === "-") {
        console.log(e.target.id)
    } else if (e.target.id === "+") {
        console.log(e.target.id)
    }
}

opBtnEl.forEach(btn => {
    btn.addEventListener('click', calculateNum)
    
})

