// 1. Написать функцию
// function firstSum = (arr, total) => {}, которая вернет массив с первой парой чисел, сумма которых равна total :const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const total = 13; firstSum(arr, total) //result = [4, 9]

// первый и самый простой вариант, но самый долгий
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const firstSum = (arr, total) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === total) {
                result.push(arr[i], arr[j]);
                return result;
            }
        }
    }
}
firstSum(arr, 13);

// 2. Оценить сложность вашего алгоритма для функции firstSum (хотя бы пару строк в качестве объяснения).
// слложность - O(n^2), так как используются вложенные циклы и каждый проходится по всему массиву n раз, а так как их 2, получается n * n

// второй вариант через два указателя, в этом случае сложность On
// const firstSum = (arr, total) => {
//     const result = [];
//     let j = arr.length - 1;
//     let i = 0;
//     let sum = 0;
//     do {
//         sum = arr[i] + arr[j];
//         if (sum === total) {
//             result.push(arr[i], arr[j]);
//             return result;
//         }
//         if (sum < total) {
//             i++;
//         } else {
//             j--;
//         }
//     } while (i !== j);
// }
//
// console.log(firstSum(arr, 13));