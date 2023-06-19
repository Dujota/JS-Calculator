// Function to handle button click event
function handleClick(event) {
    const buttonValue = event.target.textContent;
    const display = document.getElementById('calc-display');
    
    if (buttonValue === '=') {
      // Evaluate the expression using addition
      const expression = display.textContent;
      const numbers = expression.split('+');
      let sum = 0;
      for (let number of numbers) {
        sum += parseFloat(number);
      }
      display.textContent = sum;
    } else if (buttonValue === 'Reset') {
      // Clear the display
      display.textContent = '';
    } else {
      // Append the button value to the display
      display.textContent += buttonValue;
    }
  }
  
  // Add click event listeners to all buttons
  const buttons = document.querySelectorAll('.number-button, .operation-button, .equals-button, .reset-button');
  buttons.forEach(button => {
    button.addEventListener('click', handleClick);
  });