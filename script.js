const h2El = document.querySelector('h2');
const numBtnEl = document.querySelectorAll('.number-button');
const opBtnEl = document.querySelectorAll('.operation-button');
const eqBtnEl = document.querySelector('.equals-button');
const resetBtnEl = document.querySelector('.reset-button');

let total = 0

function displayNum(e) {
    if (total === 0) {
        const text = e.target.id
        display = h2El.innerText + text
        h2El.innerText = display
    } else if (h2El.classList.contains('clear')){
        h2El.innerText = ''
        const text = e.target.id
        display = h2El.innerText + text
        h2El.innerText = display
        h2El.classList.remove('clear')
    } else {
        const text = e.target.id
        display = h2El.innerText + text
        h2El.innerText = display
    }
}

numBtnEl.forEach(btn => {
    btn.addEventListener('click', displayNum)
})

function updateNum(e) {
    num = parseFloat(h2El.innerText)
    if (e.target.id === "/") {
        total = num
        h2El.classList.add('/', 'clear')
    } else if (e.target.id === "*") {
        total = num
        h2El.classList.add('*', 'clear')
    } else if (e.target.id === "-") {
        total = num
        h2El.classList.add('-', 'clear')
    } else if (e.target.id === "+") {
        total = num
        h2El.classList.add('+', 'clear')
    } else {
        console.log("valid operation button must be clicked")
    }
}

opBtnEl.forEach(btn => {
    btn.addEventListener('click', updateNum)
})

eqBtnEl.addEventListener('click', calcTotal)

function calcTotal(e) {
    num = parseFloat(h2El.innerText)
    if (h2El.classList.value === '/') {
        total /= num
        h2El.innerText = total
    } else if (h2El.classList.value === '*') {
        total *= num
        h2El.innerText = total
    } else if (h2El.classList.value === '-') {
        total -= num
        h2El.innerText = total
    } else if (h2El.classList.value === '+') {
        total += num
        h2El.innerText = total
    }
}

resetBtnEl.addEventListener('click', resetAll)

function resetAll(e) {
    h2El.classList = ''
    total = ''
    h2El.innerText = total
}