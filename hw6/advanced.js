// Напишите функцию, которая будет проходить через массив целых чисел и выводить индекст каждого элемента с задержкой в 3 секунды
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function showArrElementsWithDelay(arr, delay) {
    if (!arr.length || delay < 0) {
        throw new Error('Something wrong with input')
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        setTimeout(function () {
            console.log(`Number ${arr[i]} index is ${i}`);
        }, delay * i);
    }
}

showArrElementsWithDelay(arr, 3000);