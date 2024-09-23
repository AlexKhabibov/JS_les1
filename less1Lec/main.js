/*
// Ссылки на объект
let obj = {
    animal: 'dog'
};

let obj2 = obj;

obj = null;

console.log(obj);
console.log(obj2);
*/

/*
// Symbol
const symbol = Symbol() // объявление

const dogId = Symbol('dog'); // значение уникально даже если мы создадим несколько символов с одним описанием
console.log(dogId);

const dog1 = Symbol('dog');
const dog2 = Symbol('dog');
console.log(dog1.description); // описание
console.log(dog1);
console.log(dog2);

console.log(dog1 === dog2); // не равны
*/

/*
// let id = Symbol('dogId');
let id = Symbol('id');

let buddy = {
    [id]: 'Jack'
}

console.log(buddy[id]);


buddy[id] = 'Kuzya';
console.log(buddy[id]);

// Проблемы использования свойств объекта
let buddy2 = {
    name: 'London'
}

// создадим ключ id
buddy2.id = 'one id';
buddy2.id = 'second id'; // перезапишет свойство-ключ

console.log(buddy2.id); // 'second id'
*/

/*
// Решаем с помощью Object.assign()

let buddies = {
    [Symbol('Jack')]: 'Jack', // передаем символ напрямую без промеж переменной
    [Symbol('Kyle')]: 'Kyle',
    [Symbol('John')]: 'John',
    mouse: 'Ratatuj' // стандартное объявление без использования  символа
}

console.log(buddies);

buddies.cat = 'Marta'; // добавили новое значение ключу в buddies, но оно не появилось в объекте newbuddies(!)

let newBuddies = {};
Object.assign(newBuddies, buddies) // копируем все свойства из одного объекта(1й арг) в дргугой(2й арг). А точнее создаем ссылку на объект, проще говоря тоже самое что newBuddies = buddies

console.log(newBuddies);
*/

/*
// Читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for('id'); // если символа не существует, он будет создат

// читаем его снова и записываем в другую переменную
let id2 = Symbol.for('id');

console.log(id === id2); // true - это одно и тоже, так как идентификатор один и тот же 

// Symbol.keyFor - описние смимвола по идентификатору

// получаем и присваиваем символ по имени
let abc = Symbol.for('one');
let abcd = Symbol.for('two');

// получаем имч по символу
console.log(Symbol.keyFor(abc)); // one
console.log(Symbol.keyFor(abcd)); // two
*/

// Итурируемые объекты (цикл for of)

/*
const string = 'Hello';
console.log(string[0]);
console.log(string.length);

for (const el of string) {
    console.log(el);
};
*/

/*
// сделаем последовательность, где на выходе получим от 1 до 17
let range = {
    start: 1,
    end: 17,
    [Symbol.iterator]() {
        this.current = this.start;
        return this
    },
    next() {
        return this.current <= this.end ? { done: false, value: this.current++ } : { done: true }
    }
};


for (const number of range) {
    console.log(number);
}
    */

/*
// Array.from - Создаем масси из объекта
const obj1 = {
    0: 'first',
    1: 'second',
    length: 2
};

let arr = Array.from(obj1);
console.log(arr);
console.log(arr.pop());

let str = 'Hello from Yalta';
let arr2 = Array.from(str);
console.log(arr2); // (16) ['H', 'e', 'l', 'l', 'o', ' ', 'f', 'r', 'o', 'm', ' ', 'Y', 'a', 'l', 't', 'a']
*/

// Map, Set
/*
let map1 = new Map(); // Создаем новую пустую колл-ю map

map1.set('1', 'str'); // строка в качестве ключа
map1.set(1, 'num'); // цифра в качестве ключа
map1.set(true, 'bool'); // булевое значение в качетве ключа
console.log(map1);

console.log(map1.get(1)); // num
console.log(map1.get('1')); // str
console.log(map1.size); // 3


let map2 = new Map();

map2.set('1', 'We');
map2.set(1, 'Like');
map2.set(true, 'JS');

console.log(map2);
*/

/*
// Перебор колл Map
// Созддим сразу кол map через new
let goodsPrice = new Map([
    ['apples', 300],
    ['cucumbers', 200],
    ['tomatos', 400],
]);

console.log(goodsPrice);
//пребираем по ключам с помощью for of
for (const goods of goodsPrice.values()) {
    console.log(goods);
}

goodsPrice.forEach((key, value, map) => {
    console.log(`${key}, ${value}`);
})
    */

/*
// Работа с объектами
// Object.entries поможет создать Map
let map1 = new Map(Object.entries(obj));
// Object.fromEntrise(map1) поможет создать оюъект из Map
let obj = Object.fromEntries(map);
*/

/*
// Коллекции Set
let cats = [
    'Shaya',
    'Musya',
    'Tanya',
    'Marta',
    'Murka',
    'Lapa',
    'Murka',
    'Musya',
    'Tanya',
]

console.log(cats);

let uniqueCats = new Set(cats); // с помощью Set определяем только уникальные(не повторяющиеся) значения и переводим массив в коллекцию

console.log(uniqueCats);

// переведем обратно в массив, но уже только уникальные элементы с помощью Array.from
let newUniqueCatsArr = Array.from(uniqueCats);
console.log(newUniqueCatsArr);
*/

// Модули

// чтобы сделть доступной переменную из другого модуля, тспользуем ключевое слово export
export const name = 'Alex' 


// тоже самое с функциями
export function func () {
    console.log('Hello'); // из внутренней части функции нельзя ни экспортировать ни импортировать по законам области видимости (замыкания)
};