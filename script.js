function add(num1, num2) {
    if (typeof num1 === 'number' || typeof num2 === 'number') {
        console.log('The result of addition is ' + (num1 + num2));
    } 
}

function subtract(num1, num2) {
    if (typeof num1 === 'number' || typeof num2 === 'number') {
        console.log('The result of subtraction is ' + (num1 - num2));
    } 
}

function multiply(num1, num2) {
    if (typeof num1 === 'number' || typeof num2 === 'number') {
        console.log('The result of multiplication is ' + num1 * num2);
    } 
}

function divide(num1, num2) {
    if (typeof num1 === 'number' || typeof num2 === 'number') {
        console.log('The result of division is ' + num1 / num2);
    } 
}

const addition = add(7, 8);
const subtraction = subtract(8, 9);
const multiplication = multiply(567, -23);
const division = divide(92, 15);

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