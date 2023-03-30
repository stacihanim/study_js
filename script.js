function ifNumber(num) {
    if (typeof num !== 'number') {
        console.error('Error, NaN');
    } else {
        return num;
    }
} 


function add(num1, num2) {
    return ifNumber(num1) + ifNumber(num2);
}

function subtract(num1, num2) {
     return ifNumber(num1) - ifNumber(num2);
}

function multiply(num1, num2) {
     return ifNumber(num1) * ifNumber(num2);
}

function divide(num1, num2) {
    return ifNumber(num1) / ifNumber(num2);
}


function color(num) {
    if (num < 0) {
        num = 255 + num; 
       return 'rgb(0,' + num + ', 0)';
    } else {
        num = 255 - num;
        return 'rgb(' + num + ', 0, 0)';
    }
}

const addition = add(7, 80);
const subtraction = subtract(8, 9);
const multiplication = multiply(200, -1);
const division = divide(92, 15);

let one = document.getElementById('one');
let one_t = document.getElementById('one_t');
one_t.textContent = 'The result of addition is ';
one.textContent = addition;
one.style.color = color(addition);

let two = document.getElementById('two');
let two_t = document.getElementById('two_t');
two_t.textContent = 'The result of subtraction is ';
two.textContent = subtraction;
two.style.color = color(subtraction);

let three = document.getElementById('three');
let three_t = document.getElementById('three_t');
three_t.textContent = 'The result of multiplication is ';
three.textContent = multiplication;
three.style.color = color(multiplication);

let four = document.getElementById('four');
let four_t = document.getElementById('four_t');
four_t.textContent = 'The result of division is ';
four.textContent = division;
four.style.color = color(division);

/* Previous code */

// const firstNum = prompt('Enter the first number');
// const secondNum = prompt('Enter the second number');
// if (firstNum === "" || firstNum === null || secondNum === "" || secondNum === null) {
//     alert('Error');
// } else {
//     const addition = alert('Сума ' + (Number(firstNum) + Number(secondNum)));
//     if (Number(firstNum) < Number(secondNum)) confirm('Ви хочете продовжити операцію?') && alert('Різниця ' + (Number(firstNum) - Number(secondNum)));
//     const multiplication = alert('Добуток ' + Number(firstNum) * Number(secondNum));
//     const division = Number(secondNum) === 0 ? alert('На нуль ділити не можна') : alert('Частка ' + Number(firstNum) / Number(secondNum));    
// }