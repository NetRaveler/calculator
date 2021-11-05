let display = document.getElementById('display');
let equals = document.getElementById('equals');
let clearing = document.getElementById('clear');
let addition = document.getElementById('add');
let subtraction = document.getElementById('subtract');
let multiplication = document.getElementById('multiply');
let division = document.getElementById('divide');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');

one.addEventListener('click', () => {
    if (display.innerHTML === 0 || display.innerHTML === '0') {
        display.innerHTML = '1';
    } else {
        display.innerHTML = display.innerHTML + '1';
    }
});
two.addEventListener('click', () => {
    if (display.innerHTML === 0 || display.innerHTML === '0') {
        display.innerHTML = '2';
    } else {
        display.innerHTML = display.innerHTML + '2';
    }
});
three.addEventListener('click', () => {
    if (display.innerHTML === 0 || display.innerHTML === '0') {
        display.innerHTML = '3';
    } else {
        display.innerHTML = display.innerHTML + '3';
    }
});
four.addEventListener('click', () => {
    if (display.innerHTML === 0 || display.innerHTML === '0') {
        display.innerHTML = '4';
    } else {
        display.innerHTML = display.innerHTML + '4';
    }
});
five.addEventListener('click', () => {
    if (display.innerHTML === 0 || display.innerHTML === '0') {
        display.innerHTML = '5';
    } else {
        display.innerHTML = display.innerHTML + '5';
    }
});
six.addEventListener('click', () => {
    if (display.innerHTML === 0 || display.innerHTML === '0') {
        display.innerHTML = '6';
    } else {
        display.innerHTML = display.innerHTML + '6';
    }
});
seven.addEventListener('click', () => {
    if (display.innerHTML === 0 || display.innerHTML === '0') {
        display.innerHTML = '7';
    } else {
        display.innerHTML = display.innerHTML + '7';
    }
});
eight.addEventListener('click', () => {
    if (display.innerHTML === 0 || display.innerHTML === '0') {
        display.innerHTML = '8';
    } else {
        display.innerHTML = display.innerHTML + '8';
    }
});
nine.addEventListener('click', () => {
    if (display.innerHTML === 0 || display.innerHTML === '0') {
        display.innerHTML = '9';
    } else {
        display.innerHTML = display.innerHTML + '9';
    }
});
zero.addEventListener('click', () => {

    display.innerHTML = display.innerHTML + '0';
});

let a = 0;
let b = 0;
let total = 0;
let operand = 'default';
display.innerHTML = Number(total);

addition.addEventListener('click', () => {
    operand = 'add';
    a = display.innerHTML;
    display.innerHTML = 0;
});
subtraction.addEventListener('click', () => {
    operand = 'subtract';
    a = display.innerHTML;
    display.innerHTML = 0;
    return total;
});
multiplication.addEventListener('click', () => {
    operand = 'multiply';
    a = display.innerHTML;
    display.innerHTML = 0;
})
division.addEventListener('click', () => {
    operand = 'divide';
    a = display.innerHTML;
    display.innerHTML = 0;
})
clearing.addEventListener('click', clear);
equals.addEventListener('click', function() {
    theFirst = parseInt(a);
    theSecond = parseInt(display.innerHTML);
    operate(theFirst, theSecond, operand);
    display.innerHTML = Number(total);
    operand = 'default';

})


function add(a, b) {
    a = Number(a);
    b = Number(b);
    total = a + b;
    return total;
}

function subtract(a, b) {
    a = Number(a);
    b = Number(b);
    total = a - b;
    return total;
}

function multiply(a, b) {
    x = Number(a);
    y = Number(b);
    total = x * y;
    return total;
}

function divide(a, b) {
    a = Number(a);
    b = Number(b);
    if (b === '0') {
        total = display.innerHTML = 'To Infinity, and Beyond!';
    } else {
        total = a / b;
    }
    return total;
}

function clear() {
    a = 0;
    b = 0;
    display.innerHTML = 0;
}

function operate(a, b, operand) {
    a = a;
    b = b;
    if (operand === 'add') {
        console.log('helo');
        add(a, b);
        return total;



    } else if (operand === 'subtract') {
        subtract(a, b);
        return total;
    } else if (operand === 'multiply') {
        multiply(a, b);
        return total;
    } else if (operand === 'divide') {
        divide(a, b);
        return total;
    }
    display.innerHTML = Number(total);
    return total;


}