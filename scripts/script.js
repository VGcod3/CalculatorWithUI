'use strict';

let a = ''; // первое число
let b = ''; // второе число
let sign = ''; // третье число
let result = false; // проверка на ответ

const digit = ['0','1','2','3','4','5','6','7','8','9',]; // все числа доступные в кнопках
const action = ['÷', '×', '–', '+', ]; // все доступные действия ИСКЛЮЧАЯ РАВНО!!!

const out = document.querySelector('.calc-screen p'); // экран калькулятора

function clearAll() {
    a = '';
    b = '';
    sign = '';                  //функция отчистки экрана и обнуления всех значений (С)
    result = false;
    out.textContent = '0';
}

document.querySelector('.c').onclick = clearAll; // при нажатии на с вызывается функция обнуления (строка 12)

document.querySelector('.buttons').onclick = (event) => {

    //в блоке кнопок buttons нажата не кнопка btn
    if(!event.target.classList.contains('btn')) return;

    //кнопка clearAll (c) при нажатии выходит из функции
    if(event.target.classList.contains('c')) return;

    let del = '';
    if(event.target.classList.contains('delete')) {
        del = 'delete';
    }




    // out.textContent = '';

    let key = event.target.textContent;

    //число
    if(digit.includes(key) || del === 'delete') {
        if(b === '' && sign === '') {
            if(del === 'delete'){
                a = a.slice(0,-1);
                if (a === ''){
                    a = '0';
                }
                out.textContent = a;
                return;
            }
            a += key;
            out.textContent = a;
        }
        else if(a !== '' && b !== '' && result){
            b = key;
            result = false;
            out.textContent = b;
        }
        else {
            if(del === 'delete'){
                b = b.slice(0,-1);
                if (b === ''){
                    b = '0';
                }
                out.textContent = b;
                return;
            }
            b += key;
            out.textContent = b;
        }
        return;
    }




    //знак
    if(action.includes(key)){
        sign = key;
        out.textContent = sign;
        return;
    }

    //равно
    if (key === '=') {
        switch (sign){
            case '+':
                a = (+a) + (+b);
                break;
            case '–':
                a = a - b;
                break;
            case '×':
                a = a * b;
                break;
            case '÷':
                if (b === '0') {
                    out.textContent = 'ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        result = true;
        out.textContent = a;
    }
}
