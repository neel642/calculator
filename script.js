// light and dark mode toggle
// interchange display

let numbers = document.querySelectorAll('.number-btn');
let current = document.querySelector('.current-calc');
let last = document.querySelector('.last-calc');
let clear = document.querySelector('.clear-btn');
let operators = document.querySelectorAll('.operator-btn');

let operatorPresent = false;
let operationJustRan = false;

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        operators.forEach((operator) => {
            operator.style.backgroundColor = 'rgb(234, 213, 120)';
        });
        if (operationJustRan) {
            current.innerText = '';
            last.innerText = '';
            operationJustRan = false;
        }
        let text = last.innerText;
        textArr = text.split('');
        if ((!isNaN(textArr[textArr.length - 1])) || (textArr[textArr.length - 1] === '.')) {
            current.innerText += `${e.target.value}`;
            last.innerText += `${e.target.value}`;
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
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });
    operatorPresent = false;
    operationJustRan = false;
});

let add = document.querySelector('.add-btn');
let subtract = document.querySelector('.subtract-btn');
let multiply = document.querySelector('.multiply-btn');
let divide = document.querySelector('.divide-btn');
let modulo = document.querySelector('.modulo-btn');

add.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });

    if (operatorPresent) {
        let text = last.innerText;
        if ((text[text.length - 1] === '+') || (text[text.length - 1] === '-') || (text[text.length - 1] === '*') || (text[text.length - 1] === '/') || (text[text.length - 1] === '%')) {
            let textArr = text.split(' ');
            textArr.pop();
            last.innerText = textArr.join(' ');
        }
        else {
            operate(last.innerText);
            operatorPresent = false;
        }
    }

    if (last.innerText) {
        add.style.backgroundColor = 'rgba(209, 146, 88, 1)';
        last.innerText += ' +';
        operatorPresent = true;
        operationJustRan = false;
    }
});

subtract.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });

    if (operatorPresent) {
        let text = last.innerText;
        if ((text[text.length - 1] === '+') || (text[text.length - 1] === '-') || (text[text.length - 1] === '*') || (text[text.length - 1] === '/') || (text[text.length - 1] === '%')) {
            let textArr = text.split(' ');
            textArr.pop();
            last.innerText = textArr.join(' ');
        }
        else {
            operate(last.innerText);
            operatorPresent = false;
        }
    }
    
    if (last.innerText) {
        subtract.style.backgroundColor = 'rgba(209, 146, 88, 1)';
        last.innerText += ' -';
        operatorPresent = true;
        operationJustRan = false;
    }
});

multiply.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });

    if (operatorPresent) {
        let text = last.innerText;
        if ((text[text.length - 1] === '+') || (text[text.length - 1] === '-') || (text[text.length - 1] === '*') || (text[text.length - 1] === '/') || (text[text.length - 1] === '%')) {
            let textArr = text.split(' ');
            textArr.pop();
            last.innerText = textArr.join(' ');
        }
        else {
            operate(last.innerText);
            operatorPresent = false;
        }
    }
    
    if (last.innerText) {
        multiply.style.backgroundColor = 'rgba(209, 146, 88, 1)';
        last.innerText += ' *';
        operatorPresent = true;
        operationJustRan = false;
    }
});

divide.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });

    if (operatorPresent) {
        let text = last.innerText;
        if ((text[text.length - 1] === '+') || (text[text.length - 1] === '-') || (text[text.length - 1] === '*') || (text[text.length - 1] === '/') || (text[text.length - 1] === '%')) {
            let textArr = text.split(' ');
            textArr.pop();
            last.innerText = textArr.join(' ');
        }
        else {
            operate(last.innerText);
            operatorPresent = false;
        }
    }
    
    if (last.innerText) {
        divide.style.backgroundColor = 'rgba(209, 146, 88, 1)';
        last.innerText += ' /';
        operatorPresent = true;
        operationJustRan = false;
    }
});

modulo.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });

    if (operatorPresent) {
        let text = last.innerText;
        if ((text[text.length - 1] === '+') || (text[text.length - 1] === '-') || (text[text.length - 1] === '*') || (text[text.length - 1] === '/') || (text[text.length - 1] === '%')) {
            let textArr = text.split(' ');
            textArr.pop();
            last.innerText = textArr.join(' ');
            operatorPresent = false;
        }
        else {
            operate(last.innerText);
            operatorPresent = false;
        }
    }
    
    if (last.innerText) {
        modulo.style.backgroundColor = 'rgba(209, 146, 88, 1)';
        last.innerText += ' %';
        operatorPresent = true;
        operationJustRan = false;
    }
});

function performAddition(opArr) {
    let op1 = +opArr[0];
    let op2 = +opArr[2];
    let ans = op1 + op2;

    if (!(Number.isInteger(ans))) {
        let ansStr = ans.toString();
        let decimals = ansStr.split('.')[1].length;
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
        if (decimals > 3) {
            ans = ans.toFixed(3);
        }
    }

    last.innerText = `${ans}`;
    current.innerText = `${ans}`;
}

function operate(operation) {
    let opArr = operation.split(' ');
    if (opArr.length > 3) {
        alert('Operation not possible');
        return;
    }
    switch (opArr[1]) {
        case '+':
            performAddition(opArr);
            operatorPresent = false;
            operationJustRan = true;
            break;
        case '-':
            performSubtraction(opArr);
            operatorPresent = false;
            operationJustRan = true;
            break;
        case '*':
            performMultiplication(opArr);
            operatorPresent = false;
            operationJustRan = true;
            break;
        case '/':
            performDivision(opArr);
            operatorPresent = false;
            operationJustRan = true;
            break;
        case '%':
            performModulo(opArr);
            operatorPresent = false;
            operationJustRan = true;
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
    if (operationJustRan) {
        current.innerText = '';
        last.innerText = '';
        operationJustRan = false;
    }

    let cur = current.innerText;
    let text = last.innerText;
    textArr = text.split('');

    if (!isNaN(textArr[textArr.length - 1])) {
        if (!(cur.includes('.'))) {
            current.innerText += '.';
            last.innerText += '.';
        }
    }
    else {
        current.innerText = '.';
        last.innerText += ' .';
    }
});

let deleteBtn = document.querySelector('.delete-btn');

deleteBtn.addEventListener('click', () => {
    let text = last.innerText;
    textArr = text.split('');
    if ((!isNaN(textArr[textArr.length - 1])) || textArr[textArr.length - 1] === '.') {
        textArr.pop();
        last.innerText = textArr.join('');
        let text1 = current.innerText;
        text1Arr = text1.split('');
        text1Arr.pop();
        current.innerText = text1Arr.join('');
        return;
    }

    let arr = last.innerText.split(' ');
    arr.pop();
    last.innerText = arr.join(' ');
    operatorPresent = false;
    if (current.innerText === '-') {
        current.innerText = '';
    }
});

let negative = document.querySelector('.negative-btn');

negative.addEventListener('click', () => {
    let text = last.innerText;
    arr = text.split(' ');
    if (+(arr[arr.length - 1])) {
        let num = +(arr[arr.length - 1]);
        num *= -1;
        arr.pop();
        arr.push(num.toString());
        last.innerText = arr.join(' ');
        current.innerText = num.toString();
    }
});