// Задание 1 – Создать объект counter всеми возможными способами;
// литерал
const counter1 = {
    num: 1,
};

// конструктор new
const counter2 = new Object();

// Object.create
const counter3 = Object.create({});

// функция конструктор
function createObj(num) {
    this.num = num;
};
const counter4 = new createObj(5);

// Object.assign
const counter5 = Object.assign({count: 1});

// class
class Counter {
    constructor(num) {
        this.num = num;
    }
}
const counter6 = new Counter(222);

// Задание 2 – Скопировать объект counter всеми возможными способами;
// поверхностная копия
// Object.assign
const copy1 = Object.assign((counter1));

// Object create
const copy2 = Object.create(counter1);

// цикл for in
const copy3 = {};
for (let key in counter1) {
    copy3[key] = counter1[key];
}

// spread оператор
const copy4 = {...counter1};

// глубокое копирование
// structuredClone
const deepClone1 = structuredClone(counter1);

// библиотека lodash
// import cloneDeep from 'lodash.clonedeep';

// const deepClone2 = cloneDeep(counter1);
// console.log(deepClone2 === counter1);

// JSON stringify
const deepClone3 = JSON.parse(JSON.stringify(counter1));

// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
// function declaration
function makeCounter1() {
    let num = 0;
    return function() {
        return num++;
    };
}

// function expression
const makeCounter2 = function() {
    let num = 0;
    return function() {
        return num++;
    };
};

// arrow function
const makeCounter3 =() => {
    let num = 0;
    return function() {
        return num++;
    };
};