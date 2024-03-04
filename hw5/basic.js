// №1 Перечислить какие бывают алгоритмы сортировок?

// 1. Сорировка пузырьком
// 2. Циклическая сортировка
// 3. Сортировка выбором
// 4. Быстрая сортировка
// 5. Сортировка вставками
// 6. Сортировка подсчетом

// №2 Создать объект Person несколькими способами
// литерал
const person1 = {
    name: 'John',
    surname: 'Doe',
    sayHello() {
        console.log(`Hello, ${this.name} ${this.surname}`);
    }
};

// new Object
const person2 = new Object({
    name: 'John',
    surname: 'Doe',
    sayHello() {
        console.log(`Hello, ${this.name} ${this.surname}`);
    }
});


// Object.create
const person3 = Object.create({
    name: 'John',
    surname: 'Doe',
    sayHello() {
        console.log(`Hello, ${this.name} ${this.surname}`);
    }
});

// функция конструктор
function createPersonObj(name, surname) {
    this.name = name;
    this.surname = surname;
}

createPersonObj.prototype.sayHello = function() {
    console.log(`Hello, ${this.name} ${this.surname}`);
}

const person4 = new createPersonObj('John', 'Doe');
person4.sayHello();

// Object.assign
const person5 = Object.assign(
    {
        name: 'John',
        surname: 'Doe',
        sayHello() {
            console.log(`Hello, ${this.name} ${this.surname}`);
        }
    }
);

// class
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    sayHello() {
        console.log(`Hello, ${this.name} ${this.surname}`);
    }
}
const person6 = new Person('John', 'Doe');

// после создать объект AnotherPerson, чтобы в нём были доступны методы объекта Person.
//  __proto__
const anotherPerson1 = {
    name: 'Jane',
    __proto__: person5,
}
anotherPerson1.sayHello();

// Object.create
const anotherPerson2 = Object.create(person1, {
    name: {
        value: 'Jack',
        enumerable: true
    }
})
anotherPerson2.sayHello();

// Добавить метод logInfo чтоб он был доступен всем объектам.
person1.logInfo = function () {
    console.log(`Name: ${this.name}; Surname: ${this.surname}`);
}

// 3. Создать класс SuperPerson c get и set для поля name и конструктором , сделать класс наследник от
// класса SuperPerson.
class SuperPerson {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name
    }
    set name(name) {
        return this._name;
    }
}

class NewSuperPerson extends SuperPerson {
    constructor(name) {
        super(name);
    }
}