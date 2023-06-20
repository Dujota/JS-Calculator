const display=document.querySelector("#calc-display");
let buttons = Array.from(document.querySelectorAll('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText){
            case 'Reset':
                display.innerText=' ';
                break;
                case '=':
                    display.innerText = eval(display.innerText);
                    break;
            default:
                display.innerText += e.target.innerText;
        }

    });
})

