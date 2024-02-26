// №1  Реализовать полифил метода bind()

Function.prototype.myBind = function (obj, ...args) {
    obj.func = this;
    return function (...params) {
        return obj.func(...args, ...params)
    }
};

// проверка

const obj = { item: 'some value' }
function logger() {
    console.log(`I output only external context: ${this.item}`);
}
const loggerCopy = logger.bind(obj);
loggerCopy();