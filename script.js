// Define button inputs 

const buttons = document.querySelectorAll('button')
const operator = document.querySelectorAll('.operation-button')



// Define display area of calculator 

const display = document.querySelector('#calcDisplay')

// Define calculation before input

let calculator = []
let firstInput = null
let secondInput = null
let operatoration = null 

// Define calculation after input

let totalCalculation = ''

function calculate(button) {

 // Retrieve value of button    
   const value = button.textContent

   
 // Reset button clears calcDisplay 
    if (value === 'Reset') {
        firstInput = null
        secondInput = null
        operatoration = null 
        calculator = []
        display.textContent = ''
        // console.log(firstInput, secondInput, operator, operatoration)
 // Equal button sets display to calculation of input       
    } else if (value === '=') {
        if (operatoration === '+') {
            result = parseInt(firstInput) + parseInt(secondInput)
            display.textContent = result   
            
        }else if (operatoration === '-'){
            result = parseInt(firstInput) - parseInt(secondInput)
            display.textContent = result   

        }else if (operatoration === '*'){
            result = parseInt(firstInput) * parseInt(secondInput)
            display.textContent = result   

        }else if (operatoration === '/') {
            result = parseInt(firstInput) / parseInt(secondInput)
            display.textContent = result   

                    }  else if (operator === '+') {
                        operatoration = '+'
                
                    } else if (operator === '-') {
                        operatoration = '-'
                
                    } else if (operator === '/') {
                        operatoration = '/'
                    
                    } else  {
                        operatoration = '*'
                    }
    // display.textContent = eval(totalCalculation)
    
    } else {
        if (operatoration === null) {
            firstInput = value 
        }else {
            secondInput = value
        }
// Push value into calcDisplay        
        calculator.push(value)
        totalCalculation = calculator.join('')
        display.textContent = totalCalculation
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))




