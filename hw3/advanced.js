// Задание 1 – Развернуть строку в обратном направлении при помощи методов массивов:
function reverseStr(str) {
    return str.split('').reverse().join('');
}

// Задание 2 – Написать функцию глубокого сравнения двух объектов:
const obj1 = {
    here: {
        is: "on", other: "3"
    },
    object: {
        Z: 1,
    }
};

const obj2 = {
    here: {
        is: "on", other: "2"
    },
    object: {
        Z: 1
    }
};

function deepClone(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    } else if (obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 === 'object' && Object.keys(obj1).length && Object.keys(obj2).length) {
        if (Array.isArray(obj1) && Array.isArray(obj2)) {
            for (let key in obj1) {
                if (key in obj2) {
                    if (deepClone(obj1[key], obj2[key])) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }
}