
var heading = document.getElementById("calc-display");
// Get the button element by its ID
var button0 = document.getElementById("0");
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");
var button5 = document.getElementById("5");
var button6 = document.getElementById("6");
var button7 = document.getElementById("7");
var button8 = document.getElementById("8");
var button9 = document.getElementById("9");
var buttonp = document.getElementById("+");
var buttond = document.getElementById("/");
var buttonm = document.getElementById("-");
var buttont = document.getElementById("*");
var buttone = document.getElementById("=");
var buttonf = document.getElementById(".");
var buttonr = document.getElementById("reset");


var firstnum = 0;
var secondnum = 0;
var operator = '';
var firstnumchosen = false;


// Add a click event listener to the number buttons:
button0.addEventListener("click", function() {
     // Update display
    heading.textContent = heading.textContent + "0";
});
button1.addEventListener("click", function() {
    // Update display
   heading.textContent = heading.textContent + "1";
});
button2.addEventListener("click", function() {
    // Update display
   heading.textContent = heading.textContent + "2";
});
button3.addEventListener("click", function() {
    // Update display
   heading.textContent = heading.textContent + "3";
});
button4.addEventListener("click", function() {
    // Update display
   heading.textContent = heading.textContent + "4";
});
button5.addEventListener("click", function() {
    // Update display
   heading.textContent = heading.textContent + "5";
});
button6.addEventListener("click", function() {
    // Update display
   heading.textContent = heading.textContent + "6";
});
button7.addEventListener("click", function() {
    // Update display
   heading.textContent = heading.textContent + "7";
});
button8.addEventListener("click", function() {
    // Update display
   heading.textContent = heading.textContent + "8";
});
button9.addEventListener("click", function() {
    // Update display
   heading.textContent = heading.textContent + "9";
});
buttonf.addEventListener("click", function() {
    // Update display
   heading.textContent = heading.textContent + ".";
});


// when the add button is clicked:
buttonp.addEventListener("click", function() {
    // Update display
   firstnum = Number(heading.textContent); 
   operator = "add";
   firstnumchosen = true;
   heading.textContent = "";
});

// when the subtract button is clicked:
buttonm.addEventListener("click", function() {
    // Update display
   firstnum = Number(heading.textContent); 
   operator = "subtract";
   firstnumchosen = true;
   heading.textContent = "";
});

// when the multiply button is clicked:
buttont.addEventListener("click", function() {
    // Update display
   firstnum = Number(heading.textContent); 
   operator = "mult";
   firstnumchosen = true;
   heading.textContent = "";
});

// when the divide button is clicked:
buttond.addEventListener("click", function() {
    // Update display
   firstnum = Number(heading.textContent); 
   operator = "divide";
   firstnumchosen = true;
   heading.textContent = "";
});



// When the equal sign is clicked:
buttone.addEventListener("click", function() {
    // Update display
   secondnum = Number(heading.textContent) 

   switch (operator) {
    case "add":
        heading.textContent = firstnum+secondnum;
      break;
    case "subtract":
        heading.textContent = firstnum-secondnum;
      break;
    case "mult":
        heading.textContent = firstnum*secondnum;
      break;
    case "divide":
        heading.textContent = firstnum/secondnum;
      break;
    default:
      console.log("It's the weekend. Enjoy!");
      break;
  }
     
   
});


// Reset button sets all back to zero.
buttonr.addEventListener("click", function() {
    // Update display
   secondnum = Number(heading.textContent) 
   var firstnum = 0;
   var secondnum = 0;
   var operator = '';
   var firstnumchosen = false;
     
   heading.textContent = "";
});

