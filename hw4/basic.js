// №1 почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

// Массвы являются частным случаем объектов и разница между ними в том, что в массиве элементы расположены по порядку
// Сочетают в себе хэш-таблицы, очередь и стэк

// №2 Привязать контекст объекта:
const obj = { item: 'some value' }
function logger() {
    console.log(`I output only external context: ${this.item}`);
}

logger.call(obj);

logger.apply(obj);

const output = logger.bind(obj);
output();