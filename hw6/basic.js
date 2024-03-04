// 1
console.log('1');
setTimeout(() => console.log('2'), 1);
let promiseNew = new Promise((resolve) => {
    console.log('3');
    resolve();
});
promiseNew.then(() => console.log('4'));
setTimeout(() => console.log('5'));
console.log('6');

// в консоли будет 136425
// сначала выполняется первый console.log, далее console.log промиса, затем последний console.log, и далее setTimeout по очереди

// 2
let promiseTree = new Promise((resolve, reject) => {
    resolve('a');
    console.log('1');
    setTimeout(() => {
        console.log('2');
    }, 0);
    console.log('3');
})
// в консоли будет 132
// сначала последовательно выполнятся console.log промиса, затем setTimeout

// 3
let promiseTwo = new Promise((resolve, reject) => {
    resolve('a');
})
promiseTwo.then((res) => {
    return res + 'b'
}).then((res) => {
    return res + 'c';
}).finally((res) => {
    return res + '!!!!';
}).catch((res) => {
    return res + 'd';
}).then((res) => {
    console.log(res);
})
// promise сразу идет с resolve, идем во цепочке then, возвращается ab, потом abc и в консоли получаем abc

// 4
function doSmth() {
    return Promise.resolve('123');
}
doSmth().then(function (a) {
    console.log('1', a);
    return a;
}).then(function (b) {
    console.log('2', b);

    return Promise.reject('321');
}).catch(function(err) {
    console.log('3', err);
}).then(function(c) {
    console.log('4', c);
    return c;
});
// функция doSmth возвращает promise идем по цепочке then, получаем
// 1 123
// 2 123
// последний then возвращает promise reject идем по catch, получаем
// 3 321
// так как последним идет then в консоли получаем 4 undefined

// 5
console.log('1');
setTimeout(function () {
    console.log('2')
}, 0);
Promise.resolve().then(() => {
    console.log('3');
    console.log('4');
})
// в консоли будет 1342
// сначала выводится первый console.log, затем console.log промиса так как он относится к микрозадачам и имееет приоритет над setTimeout, в конце выаодится console.log setTimeout
