// Element Selectors
/**
 * select an element by id - getElementById / querySelector
 * select an element by class - querySelector
 * select an element by tag name - querySelector
 * select multiple elements by class or tag  - querySelectorAll
 */

const calcButton = document.querySelectorAll(`button`)
const calcDisplay = document.querySelector(`#calc-display`)

let calcArray = [];

const resetCalc = () => {
  calcArray = [`0`]
  calcDisplay.innerHTML = `${calcArray}`
  calcArray = []
  updateCalcArrayLocalStorage();
}

const updateCalcDisplay = () => {
  let displayNumber = calcArray.join(``)
  calcDisplay.innerHTML = `${displayNumber}`
}

const initCalc = () => {
  calcArray = getCalcArrayLocalStorage();
  if (calcArray.length === 0){
    resetCalc();
  } else {
    updateCalcDisplay();
  }
}

const getValueFromEvent = event => {
  let eventType = event.constructor.name
  
  if (eventType === `PointerEvent`) {
    return event.target.id
  } else if (eventType === `KeyboardEvent`) {
    return event.key
  }
}

const isValidValue = calcSelection => {
  if (!isNaN(calcSelection)) {
    return true
  } else {
    const allowedKeys = [
      `.`,
      `+`,
      `=`,
      `-`,
      `*`,
      `/`,
      `reset`,
      `Backspace`,
      `Enter`
    ]
    if (allowedKeys.includes(calcSelection)) {
      return true
    } else {
      return false
    }
  }
}

const getCalcArrayLocalStorage = () => {
  return JSON.parse(localStorage.getItem("calcArray"));
}

const updateCalcArrayLocalStorage = () => {
  localStorage.setItem("calcArray", JSON.stringify(calcArray));
}

const doMath = event => {
  let calcSelection = getValueFromEvent(event)
  if ((calcSelection === `reset`) | (calcSelection === `Backspace`)) {
    resetCalc()
  } else if ((calcSelection === `=`) | (calcSelection === `Enter`)) {
    let numberMath = eval(calcArray.join(``) || '0')
    let stringToNum = parseFloat(numberMath)
    if (Math.round(stringToNum) !== stringToNum) {
      calcArray = [Number(stringToNum.toFixed(5))]
    } else {
      calcArray = [stringToNum]
    }
    updateCalcArrayLocalStorage();
    updateCalcDisplay();
  } else {
    if (isValidValue(calcSelection)) {
      calcArray.push(calcSelection)
      updateCalcArrayLocalStorage();
      updateCalcDisplay();
    }
  }
}

initCalc();
// Event Listeners
calcButton.forEach(button => button.addEventListener(`click`, doMath))

document.addEventListener(`keydown`, doMath)
