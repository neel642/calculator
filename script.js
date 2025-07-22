// light and dark mode toggle
// = only on numbers
// clear and backspace
// decimal numbers
// new operation should not append
// continuous operations
// operator replacing operator, ex clicking = after *

let numbers = document.querySelectorAll('.number-btn');
let current = document.querySelector('.current-calc');
let last = document.querySelector('.last-calc');
let clear = document.querySelector('.clear-btn');
let operators = document.querySelectorAll('.operator-btn');

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        let text = last.innerText;
        textArr = text.split('');
        if ((+(textArr[textArr.length - 1])) || (textArr[textArr.length - 1] === '.')) {
            current.innerText += `${e.target.value}`;
            last.innerText += `${e.target.value}`;
            // operators.forEach((operator) => {
            //     operator.style.backgroundColor = 'rgb(234, 213, 120)';
            // });
        }
        else {
            current.innerText = `${e.target.value}`;
            last.innerText += ` ${e.target.value}`;
        }
    });
});

clear.addEventListener('click', () => {
    last.innerText = '';
    current.innerText = '';
});

let add = document.querySelector('.add-btn');
let subtract = document.querySelector('.subtract-btn');
let multiply = document.querySelector('.multiply-btn');
let divide = document.querySelector('.divide-btn');
let modulo = document.querySelector('.modulo-btn');

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        operators.forEach((operator) => {
            operator.style.backgroundColor = 'rgb(234, 213, 120)';
        });
    });
});

add.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });
    add.style.backgroundColor = 'rgba(209, 146, 88, 1)';
    last.innerText += ' +';
});

subtract.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });
    subtract.style.backgroundColor = 'rgba(209, 146, 88, 1)';
    last.innerText += ' -';
});

multiply.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });
    multiply.style.backgroundColor = 'rgba(209, 146, 88, 1)';
    last.innerText += ' *';
});

divide.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });
    divide.style.backgroundColor = 'rgba(209, 146, 88, 1)';
    last.innerText += ' /';
});

modulo.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });
    modulo.style.backgroundColor = 'rgba(209, 146, 88, 1)';
    last.innerText += ' %';
});

function performAddition(opArr) {
    let op1 = +opArr[0];
    let op2 = +opArr[2];
    let ans = op1 + op2;

    if (!(Number.isInteger(ans))) {
        let ansStr = ans.toString();
        let decimals = ansStr.split('.')[1].length;
        console.log(decimals);
        if (decimals > 3) {
            ans = ans.toFixed(3);
        }
    }

    last.innerText = `${ans}`;
    current.innerText = `${ans}`;
}

function performSubtraction(opArr) {
    let op1 = +opArr[0];
    let op2 = +opArr[2];
    let ans = op1 - op2;

    if (!(Number.isInteger(ans))) {
        let ansStr = ans.toString();
        let decimals = ansStr.split('.')[1].length;
        console.log(decimals);
        if (decimals > 3) {
            ans = ans.toFixed(3);
        }
    }

    last.innerText = `${ans}`;
    current.innerText = `${ans}`;
}

function performMultiplication(opArr) {
    let op1 = +opArr[0];
    let op2 = +opArr[2];
    let ans = op1 * op2;

    if (!(Number.isInteger(ans))) {
        let ansStr = ans.toString();
        let decimals = ansStr.split('.')[1].length;
        console.log(decimals);
        if (decimals > 3) {
            ans = ans.toFixed(3);
        }
    }

    last.innerText = `${ans}`;
    current.innerText = `${ans}`;
}

function performDivision(opArr) {
    let op1 = +opArr[0];
    let op2 = +opArr[2];
    let ans = op1 / op2;

    if (!(Number.isInteger(ans))) {
        let ansStr = ans.toString();
        let decimals = ansStr.split('.')[1].length;
        console.log(decimals);
        if (decimals > 3) {
            ans = ans.toFixed(3);
        }
    }

    last.innerText = `${ans}`;
    current.innerText = `${ans}`;
}

function performModulo(opArr) {
    let op1 = +opArr[0];
    let op2 = +opArr[2];
    let ans = op1 % op2;

    if (!(Number.isInteger(ans))) {
        let ansStr = ans.toString();
        let decimals = ansStr.split('.')[1].length;
        console.log(decimals);
        if (decimals > 3) {
            ans = ans.toFixed(3);
        }
    }

    last.innerText = `${ans}`;
    current.innerText = `${ans}`;
}

function operate(operation) {
    let opArr = operation.split(' ');
    switch (opArr[1]) {
        case '+':
            performAddition(opArr);
            break;
        case '-':
            performSubtraction(opArr);
            break;
        case '*':
            performMultiplication(opArr);
            break;
        case '/':
            performDivision(opArr);
            break;
        case '%':
            performModulo(opArr);
            break;
        default:
            alert('Operation not possible!');
            break;
    }
}

let equalto = document.querySelector('.equalto-btn');

equalto.addEventListener('click', () => {
    operate(last.innerText);
});

let decimal = document.querySelector('.decimal-btn');

decimal.addEventListener('click', () => {
    let cur = current.innerText;
    if (!(cur.includes('.'))) {
        current.innerText += '.';
        last.innerText += '.';
    }
});