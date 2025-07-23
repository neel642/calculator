// only . should become 0.

let numbers = document.querySelectorAll('.number-btn');
let current = document.querySelector('.current-calc');
let last = document.querySelector('.last-calc');
let clear = document.querySelector('.clear-btn');
let operators = document.querySelectorAll('.operator-btn');

let operatorPresent = false;
let operationJustRan = false

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        operators.forEach((operator) => {
            if (operator.classList.contains('add-btn') || 
                operator.classList.contains('subtract-btn') ||
                operator.classList.contains('multiply-btn') ||
                operator.classList.contains('divide-btn') ||
                operator.classList.contains('modulo-btn')) {
                operator.style.background = 'linear-gradient(135deg, #f28888ff, #ee5a24)';
            }
        });

        if (current.innerText === '0' || current.innerText === 'Cannot divide by 0!') {
            current.innerText = '';
        }

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
    current.innerText = '0';
    operators.forEach((operator) => {
        if (operator.classList.contains('add-btn') || 
            operator.classList.contains('subtract-btn') ||
            operator.classList.contains('multiply-btn') ||
            operator.classList.contains('divide-btn') ||
            operator.classList.contains('modulo-btn')) {
            operator.style.background = 'linear-gradient(135deg, #f28888ff, #ee5a24)';
        }
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
        if (operator.classList.contains('add-btn') || 
            operator.classList.contains('subtract-btn') ||
            operator.classList.contains('multiply-btn') ||
            operator.classList.contains('divide-btn') ||
            operator.classList.contains('modulo-btn')) {
            operator.style.background = 'linear-gradient(135deg, #f28888ff, #ee5a24)';
        }
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
        if (current.innerText === 'Cannot divide by 0!') {
            current.innerText = '0';
            return;
        }
        add.style.background = 'linear-gradient(135deg, #e45757ff, #a41818ff)';
        current.innerText += ' +';
        operatorPresent = true;
    }
});

subtract.addEventListener('click', () => {
    operators.forEach((operator) => {
        if (operator.classList.contains('add-btn') || 
            operator.classList.contains('subtract-btn') ||
            operator.classList.contains('multiply-btn') ||
            operator.classList.contains('divide-btn') ||
            operator.classList.contains('modulo-btn')) {
            operator.style.background = 'linear-gradient(135deg, #f28888ff, #ee5a24)';
        }
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
        if (current.innerText === 'Cannot divide by 0!') {
            current.innerText = '0';
            return;
        }
        subtract.style.background = 'linear-gradient(135deg, #e45757ff, #a41818ff)';
        current.innerText += ' -';
        operatorPresent = true;
    }
});

multiply.addEventListener('click', () => {
    operators.forEach((operator) => {
        if (operator.classList.contains('add-btn') || 
            operator.classList.contains('subtract-btn') ||
            operator.classList.contains('multiply-btn') ||
            operator.classList.contains('divide-btn') ||
            operator.classList.contains('modulo-btn')) {
            operator.style.background = 'linear-gradient(135deg, #f28888ff, #ee5a24)';
        }
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
        if (current.innerText === 'Cannot divide by 0!') {
            current.innerText = '0';
            return;
        }
        multiply.style.background = 'linear-gradient(135deg, #e45757ff, #a41818ff)';
        current.innerText += ' *';
        operatorPresent = true;
    }
});

divide.addEventListener('click', () => {
    operators.forEach((operator) => {
        if (operator.classList.contains('add-btn') || 
            operator.classList.contains('subtract-btn') ||
            operator.classList.contains('multiply-btn') ||
            operator.classList.contains('divide-btn') ||
            operator.classList.contains('modulo-btn')) {
            operator.style.background = 'linear-gradient(135deg, #f28888ff, #ee5a24)';
        }
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
        if (current.innerText === 'Cannot divide by 0!') {
            current.innerText = '0';
            return;
        }
        divide.style.background = 'linear-gradient(135deg, #e45757ff, #a41818ff)';
        current.innerText += ' /';
        operatorPresent = true;
    }
});

modulo.addEventListener('click', () => {
    operators.forEach((operator) => {
        if (operator.classList.contains('add-btn') || 
            operator.classList.contains('subtract-btn') ||
            operator.classList.contains('multiply-btn') ||
            operator.classList.contains('divide-btn') ||
            operator.classList.contains('modulo-btn')) {
            operator.style.background = 'linear-gradient(135deg, #f28888ff, #ee5a24)';
        }
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
        if (current.innerText === 'Cannot divide by 0!') {
            current.innerText = '0';
            return;
        }
        modulo.style.background = 'linear-gradient(135deg, #e45757ff, #a41818ff)';
        current.innerText += ' %';
        operatorPresent = true;
    }
});

function performAddition(num1, num2) {
    let ans = num1 + num2;
    return ans;
}

function performSubtraction(num1, num2) {
    let ans = num1 - num2;
    return ans;
}

function performMultiplication(num1, num2) {
    let ans = num1 * num2;
    return ans;
}

function performDivision(num1, num2) {
    if (num2 === 0) {
        current.innerText = 'Cannot divide by 0!';
        return;
    }
    let ans = num1 / num2;
    return ans;
}

function performModulo(num1, num2) {
    if (num2 === 0) {
        current.innerText = 'Cannot divide by 0!';
        return;
    }
    let ans = num1 % num2;
    return ans;
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
    if (!(Number.isInteger(nums[0]))) {
        let ansStr = nums[0].toString();
        let decimals = ansStr.split('.')[1].length;
        if (decimals > 3) {
            return parseFloat(nums[0].toFixed(3)).toString();
        }
    }
    return parseFloat(nums[0]).toString();
}

let equalto = document.querySelector('.equalto-btn');

equalto.addEventListener('click', () => {
    operators.forEach((operator) => {
        if (operator.classList.contains('add-btn') || 
            operator.classList.contains('subtract-btn') ||
            operator.classList.contains('multiply-btn') ||
            operator.classList.contains('divide-btn') ||
            operator.classList.contains('modulo-btn')) {
            operator.style.background = 'linear-gradient(135deg, #f28888ff, #ee5a24)';
        }
    });

    if (current.innerText === 'Cannot divide by 0!') {
        current.innerText = '0';
        return;
    }

    let res = operate(current.innerText);
    last.innerText = current.innerText;
    current.innerText = `${res}`;
});

let decimal = document.querySelector('.decimal-btn');

decimal.addEventListener('click', () => {
    if (current.innerText === 'Cannot divide by 0!') {
        current.innerText = '0';
        return;
    }

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
            current.innerText += ' 0.';
        }
        else {
            current.innerText += '0.';
        }
    }

    operators.forEach((operator) => {
        if (operator.classList.contains('add-btn') || 
            operator.classList.contains('subtract-btn') ||
            operator.classList.contains('multiply-btn') ||
            operator.classList.contains('divide-btn') ||
            operator.classList.contains('modulo-btn')) {
            operator.style.background = 'linear-gradient(135deg, #f28888ff, #ee5a24)';
        }
    });
});

let deleteBtn = document.querySelector('.delete-btn');

deleteBtn.addEventListener('click', () => {
    if (current.innerText === 'Cannot divide by 0!') {
        current.innerText = '0';
        return;
    }

    let text = current.innerText;
    textArr = text.split('');
    if ((!isNaN(textArr[textArr.length - 1])) || textArr[textArr.length - 1] === '.') {
        textArr.pop();
        if (textArr[textArr.length - 1] === '-') {
            textArr.pop();
        }
        current.innerText = textArr.join('');
        last.innerText = '';
        if (!current.innerText) {
            current.innerText = '0';
        }
        return;
    }

    let arr = current.innerText.split(' ');
    arr.pop();
    current.innerText = arr.join(' ');
    last.innerText = '';
    if (!current.innerText) {
        current.innerText = '0';
    }
    operatorPresent = false;

    operators.forEach((operator) => {
        if (operator.classList.contains('add-btn') || 
            operator.classList.contains('subtract-btn') ||
            operator.classList.contains('multiply-btn') ||
            operator.classList.contains('divide-btn') ||
            operator.classList.contains('modulo-btn')) {
            operator.style.background = 'linear-gradient(135deg, #f28888ff, #ee5a24)';
        }
    });
});

let negative = document.querySelector('.negative-btn');

negative.addEventListener('click', () => {
    if (current.innerText === 'Cannot divide by 0!') {
        current.innerText = '0';
        return;
    }

    arr = current.innerText.split(' ');
    if (!isNaN(arr[arr.length - 1])) {
        let num = +(arr[arr.length - 1]);
        num *= -1;
        arr.pop();
        arr.push(num.toString());
        current.innerText = arr.join(' ');
    }

    operators.forEach((operator) => {
        if (operator.classList.contains('add-btn') || 
            operator.classList.contains('subtract-btn') ||
            operator.classList.contains('multiply-btn') ||
            operator.classList.contains('divide-btn') ||
            operator.classList.contains('modulo-btn')) {
            operator.style.background = 'linear-gradient(135deg, #f28888ff, #ee5a24)';
        }
    });
});