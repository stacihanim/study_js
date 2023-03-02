const firstNum = prompt('Enter the first number');
const secondNum = prompt('Enter the second number');
if (firstNum === "" || firstNum === null || secondNum === "" || secondNum === null) {
    alert('Error');
} else {
    const addition = alert('Сума ' + (Number(firstNum) + Number(secondNum)));
    if (Number(firstNum) < Number(secondNum)) confirm('Ви хочете продовжити операцію?') && alert('Різниця ' + (Number(firstNum) - Number(secondNum)));
    const multiplication = alert('Добуток ' + Number(firstNum) * Number(secondNum));
    const division = Number(secondNum) === 0 ? alert('На нуль ділити не можна') : alert('Частка ' + Number(firstNum) / Number(secondNum));    
}