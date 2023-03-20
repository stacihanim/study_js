// 1.
function isEmptyObj(obj) {
    return Object.keys(obj).length === 0;
}

// 2.
const user = {
    name: 'Палпатін',
    age: 100,
    sayHello: function() {
        return `Привіт, я ${this.name}, мені ${this.age} років.`
    }
}

console.log(user.sayHello());
console.log(isEmptyObj(user));


function createUser(name, age) {
    return {
        name: name,
        age: age,
        sayHello: function() {
                    return `Привіт, я ${this.name}, мені ${this.age} років.`
                }
}
}
const yoda = createUser('майстер Йода', 500);
console.log(yoda.sayHello());
const grogu = createUser('Грогу', 50);
console.log(grogu.sayHello());


// 3.
const calc = {
    ask: function() {
        this.num1 = Number(prompt('Enter the first number'));
        this.num2 = Number(prompt('Enter the second number'));
    },
    sum: function() {
        return this.num1 + this.num2;
    },
    mul: function() {
        return this.num1 * this.num2;
    }
}

calc.ask();
console.log(calc.sum());
console.log(calc.mul());