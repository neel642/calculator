// light and dark mode toggle
// 1.2 * 4.05 + 1.2 not working => ans.toFixed is not a function

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

        let text = current.innerText;
        textArr = text.split('');
        if ((!isNaN(textArr[textArr.length - 1])) || (textArr[textArr.length - 1] === '.') || textArr.length === 0) {
            current.innerText += `${e.target.value}`;
        }
        else {
            current.innerText += ` ${e.target.value}`;
        }
        last.innerText = '';
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
        let text = current.innerText;
        if ((text[text.length - 1] === '+') || (text[text.length - 1] === '-') || (text[text.length - 1] === '*') || (text[text.length - 1] === '/') || (text[text.length - 1] === '%')) {
            let textArr = text.split(' ');
            textArr.pop();
            current.innerText = textArr.join(' ');
        }
    }

    if (operationJustRan) {
        last.innerText = '';
        operationJustRan = false;
    }

    if (current.innerText) {
        add.style.backgroundColor = 'rgba(209, 146, 88, 1)';
        current.innerText += ' +';
        operatorPresent = true;
    }
});

subtract.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });

    if (operatorPresent) {
        let text = current.innerText;
        if ((text[text.length - 1] === '+') || (text[text.length - 1] === '-') || (text[text.length - 1] === '*') || (text[text.length - 1] === '/') || (text[text.length - 1] === '%')) {
            let textArr = text.split(' ');
            textArr.pop();
            current.innerText = textArr.join(' ');
        }
    }
    
    if (operationJustRan) {
        last.innerText = '';
        operationJustRan = false;
    }

    if (current.innerText) {
        subtract.style.backgroundColor = 'rgba(209, 146, 88, 1)';
        current.innerText += ' -';
        operatorPresent = true;
    }
});

multiply.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });

    if (operatorPresent) {
        let text = current.innerText;
        if ((text[text.length - 1] === '+') || (text[text.length - 1] === '-') || (text[text.length - 1] === '*') || (text[text.length - 1] === '/') || (text[text.length - 1] === '%')) {
            let textArr = text.split(' ');
            textArr.pop();
            current.innerText = textArr.join(' ');
        }
    }
    
    if (operationJustRan) {
        last.innerText = '';
        operationJustRan = false;
    }

    if (current.innerText) {
        multiply.style.backgroundColor = 'rgba(209, 146, 88, 1)';
        current.innerText += ' *';
        operatorPresent = true;
    }
});

divide.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });

    if (operatorPresent) {
        let text = current.innerText;
        if ((text[text.length - 1] === '+') || (text[text.length - 1] === '-') || (text[text.length - 1] === '*') || (text[text.length - 1] === '/') || (text[text.length - 1] === '%')) {
            let textArr = text.split(' ');
            textArr.pop();
            current.innerText = textArr.join(' ');
        }
    }
    
    if (operationJustRan) {
        last.innerText = '';
        operationJustRan = false;
    }

    if (current.innerText) {
        divide.style.backgroundColor = 'rgba(209, 146, 88, 1)';
        current.innerText += ' /';
        operatorPresent = true;
    }
});

modulo.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });

    if (operatorPresent) {
        let text = current.innerText;
        if ((text[text.length - 1] === '+') || (text[text.length - 1] === '-') || (text[text.length - 1] === '*') || (text[text.length - 1] === '/') || (text[text.length - 1] === '%')) {
            let textArr = text.split(' ');
            textArr.pop();
            current.innerText = textArr.join(' ');
        }
    }
    
    if (operationJustRan) {
        last.innerText = '';
        operationJustRan = false;
    }

    if (current.innerText) {
        modulo.style.backgroundColor = 'rgba(209, 146, 88, 1)';
        current.innerText += ' %';
        operatorPresent = true;
    }
});

function performAddition(num1, num2) {
    let ans = num1 + num2;
    console.log(ans);

    if (!(Number.isInteger(ans))) {
        let ansStr = ans.toString();
        let decimals = ansStr.split('.')[1].length;
        if (decimals > 3) {
            ans = ans.toFixed(3);
        }
    }
    return +ans;
}

function performSubtraction(num1, num2) {
    let ans = num1 - num2;

    if (!(Number.isInteger(ans))) {
        let ansStr = ans.toString();
        let decimals = ansStr.split('.')[1].length;
        if (decimals > 3) {
            ans = ans.toFixed(3);
        }
    }
    return +ans;
}

function performMultiplication(num1, num2) {
    let ans = num1 * num2;

    if (!(Number.isInteger(ans))) {
        let ansStr = ans.toString();
        let decimals = ansStr.split('.')[1].length;
        if (decimals > 3) {
            ans = ans.toFixed(3);
        }
    }
    return +ans;
}

function performDivision(num1, num2) {
    let ans = num1 / num2;

    if (!(Number.isInteger(ans))) {
        let ansStr = ans.toString();
        let decimals = ansStr.split('.')[1].length;
        if (decimals > 3) {
            ans = ans.toFixed(3);
        }
    }
    return +ans;
}

function performModulo(num1, num2) {
    let ans = num1 % num2;

    if (!(Number.isInteger(ans))) {
        let ansStr = ans.toString();
        let decimals = ansStr.split('.')[1].length;
        if (decimals > 3) {
            ans = ans.toFixed(3);
        }
    }
    return +ans;
}

function operate(operation) {
    let opArr = operation.split(' ');
    let nums = [];
    let ops = [];

    for (let i = 0; i < opArr.length; i++) {
        if (!isNaN(opArr[i])) {
            nums.push(+(opArr[i]));
        }
        else {
            ops.push(opArr[i]);
        }
    }

    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '/' || ops[i] === '*' || ops[i] === '%') {
            let result;
            if (ops[i] === '/') {
                result = performDivision(nums[i], nums[i+1]);
            }
            else if (ops[i] === '*') {
                result = performMultiplication(nums[i], nums[i+1]);
            }
            else {
                result = performModulo(nums[i], nums[i+1]);
            }

            nums.splice(i, 2, result);
            ops.splice(i, 1);
            i--;
        }
    }

    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '+' || ops[i] === '-') {
            let result;
            if (ops[i] === '+') {
                result = performAddition(nums[i], nums[i+1]);
            }
            else {
                result = performSubtraction(nums[i], nums[i+1]);
            }

            nums.splice(i, 2, result);
            ops.splice(i, 1);
            i--;
        }
    }

    operatorPresent = false;
    operationJustRan = true;
    return nums[0];
}

let equalto = document.querySelector('.equalto-btn');

equalto.addEventListener('click', () => {
    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });
    let res = operate(current.innerText);
    last.innerText = current.innerText;
    current.innerText = `${res}`;
});

let decimal = document.querySelector('.decimal-btn');

decimal.addEventListener('click', () => {
    if (operationJustRan) {
        current.innerText = '';
        last.innerText = '';
        operationJustRan = false;
    }

    let textArr = current.innerText.split('');

    if ((!isNaN(textArr[textArr.length - 1])) || (textArr[textArr.length - 1] === '.')) {
        let arr = current.innerText.split(' ');
        if (!(arr[arr.length - 1].includes('.'))) {
            current.innerText += '.';
        }
    }
    else {
        if (current.innerText) {
            current.innerText += ' .';
        }
        else {
            current.innerText += '.';
        }
    }

    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });
});

let deleteBtn = document.querySelector('.delete-btn');

deleteBtn.addEventListener('click', () => {
    let text = current.innerText;
    textArr = text.split('');
    if ((!isNaN(textArr[textArr.length - 1])) || textArr[textArr.length - 1] === '.') {
        textArr.pop();
        if (textArr[textArr.length - 1] === '-') {
            textArr.pop();
        }
        current.innerText = textArr.join('');
        return;
    }

    let arr = current.innerText.split(' ');
    arr.pop();
    current.innerText = arr.join(' ');
    operatorPresent = false;

    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });
});

let negative = document.querySelector('.negative-btn');

negative.addEventListener('click', () => {
    arr = current.innerText.split(' ');
    if (!isNaN(arr[arr.length - 1])) {
        let num = +(arr[arr.length - 1]);
        num *= -1;
        arr.pop();
        arr.push(num.toString());
        current.innerText = arr.join(' ');
    }

    operators.forEach((operator) => {
        operator.style.backgroundColor = 'rgb(234, 213, 120)';
    });
});