// Element Selectors
/**
 * select an element by id - getElementById / querySelector
 * select an element by class - querySelector
 * select an element by tag name - querySelector
 * select multiple elements by class or tag  - querySelectorAll
 */

const calcButton = document.querySelectorAll(`button`)
const calcDisplay = document.querySelector(`#calc-display`)
let calcArray = []

/* 
Need to figure out how to get more values to show on cal at once. 1. Save display number seperately or evalute buttonArray
*/

const resetCalc = () => {
  calcArray = [`0`]
  calcDisplay.innerHTML = `${calcArray}`
  calcArray = []
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

const doMath = event => {
  console.log('event', event)
  let calcSelection = getValueFromEvent(event)
  if ((calcSelection === `reset`) | (calcSelection === `Backspace`)) {
    resetCalc()
  } else if ((calcSelection === `=`) | (calcSelection === `Enter`)) {
    let numberMath = eval(calcArray.join(``) || '0')
    let stringToNum = parseFloat(numberMath)
    let finalNum = null
    if (Math.round(stringToNum) !== stringToNum) {
      finalNum = Number(stringToNum.toFixed(5))
      console.log(finalNum)
    } else {
      finalNum = stringToNum
      console.log(finalNum)
    }
    calcDisplay.innerHTML = `${finalNum}`
    console.log(`finalNum:${finalNum}`)
  } else {
    if (isValidValue(calcSelection)) {
      calcArray.push(calcSelection)
      let displayNumber = calcArray.join(``)
      calcDisplay.innerHTML = `${displayNumber}`
      console.log(calcArray)
    }
  }
}

resetCalc()
// Event Listeners
calcButton.forEach(button => button.addEventListener(`click`, doMath))

document.addEventListener(`keydown`, doMath)
