const input = document.querySelector('.calculator__input-result');
const actual = document.querySelector('.calculator__output-actual');
const clearBtn = document.querySelector('.clear');
const backBtn = document.querySelector('.back');
const calcBtns = document.querySelectorAll('.calc-btn');
const operationBtns = document.querySelectorAll('.operation')
const equalBtn = document.querySelector('.equal');
const changeBtn = document.querySelector('.change')

// first part of operation variable
let x = 0;
let y = 0;
let operation;

const clearArea = () => {
	input.textContent = '0';
	actual.textContent = '';
    x = 0;
    y = 0;
    operation = ''
    checkLength()
};

const backSpace = () => {
	input.textContent = input.textContent.slice(0, -1);
    y = parseFloat(input.textContent)
    checkLength()
};

const typeActual = (el) => {
    if (input.textContent.length > 10) {
        return
    }
	if (el.textContent !== '.' && input.textContent === '0') {
		input.textContent = '';
	}
	if (input.textContent.indexOf('.') !== -1 && el.textContent === '.') {
		return;
	}
    if (actual.textContent.indexOf('=') !== -1) {
        input.textContent = ''
        actual.textContent = ''
    }
    

	input.textContent = input.textContent + el.textContent;
    y = parseFloat(input.textContent)
    checkLength()

};

const checkLength = () => {
    if (input.textContent.length > 8 || actual.textContent.length > 8) {
        input.style.fontSize = '16px'
        actual.style.fontSize = '10px'
    } else {
        input.style.fontSize = '30px'
        actual.style.fontSize = '14px'
    }
}

const changeChar = () => {
    if (input.textContent === '0') {
        return
    }
    else if (input.textContent.charAt(0) === '-') {
        input.textContent = input.textContent.substring(1)
    } else {
        input.textContent = '-' + input.textContent
    }

    y = parseFloat(input.textContent)
    
}

const startCalc = (e) => {
	x = parseFloat(input.textContent);
	actual.textContent = `${input.textContent} ${e}`;
    input.textContent = '0';
    operation = e
};

const equal = () => {
    if (operation === '+') {
        input.textContent = ((x + y).toFixed(10) * 100) / 100
        actual.textContent = `${x} + ${y} =`
    } else if (operation === '-') {
        input.textContent = ((x - y).toFixed(10) * 100) / 100
        actual.textContent = `${x} - ${y} =`
    } else if (operation === '*') {
        input.textContent = ((x * y).toFixed(10) * 100) / 100
        actual.textContent = `${x} * ${y} =`
    } else if (operation === '/') {
        input.textContent = ((x / y).toFixed(10) * 100) / 100
        actual.textContent = `${x} / ${y} =`
    } 
    checkLength()
}

clearBtn.addEventListener('click', clearArea);
backBtn.addEventListener('click', backSpace);
calcBtns.forEach((el) => {
	el.addEventListener('click', () => {
		typeActual(el);
	});
});
operationBtns.forEach(el => {
    el.addEventListener('click', (e) => {
        startCalc(e.target.textContent);
    })
})
changeBtn.addEventListener('click', changeChar)
equalBtn.addEventListener('click', equal)
