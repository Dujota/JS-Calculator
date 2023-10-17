const calcRows = document.querySelector('#frame');

let numEntry2 = []
let numEntry = []
let operationEntry = []
let history = []

function recordNumber(event) {
    if (event.target.className === 'number-button' && operationEntry.length === 0) {
        numEntry += event.target.innerText
        console.log(numEntry)
        return numEntry
    }
}


function setUpOperator(event) {
    if (event.target.className === 'operation-button' && numEntry.length > 0) {
        operationEntry = event.target.innerText
        let num1 = Number(numEntry)
        history = [num1, operationEntry]
        console.log(history)
        return history

    }
}

function record2ndNumber(event) {
    if (event.target.className === 'number-button' && operationEntry.length !== 0) {
        numEntry2 += event.target.innerText
        console.log(numEntry2)
        return numEntry2
    }
}



function compute(event) {
    if (event.target.className === 'equals-button' && numEntry2.length !== 0) {
        let num2 = Number(numEntry2)
        history.push(num2)
        console.log(history)
        let answer = (eval(history.join("")))
        console.log(answer)

    }
}



calcRows.addEventListener('click', recordNumber)
calcRows.addEventListener('click', setUpOperator)
calcRows.addEventListener('click', record2ndNumber)
calcRows.addEventListener('click', compute)












