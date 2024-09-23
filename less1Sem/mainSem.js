/*
// Задание 1
// Создать механизм для безопасного добавления метаданных к объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
// 2. Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на консоль.

function addMetadata(book, metaDataType, data) {
    if (book[metaDataType]) {
        book[metaDataType].push(data);
    } else {
        book[metaDataType] = data;
    }
};

function getMetadata(book, metaDataType) {
    return book[metaDataType];
};

const book = {
    author: 'Pushkin A.S.',
    title: 'Mednyj vsadnik'
};

const reviewSymbol = Symbol('review');
const ratingSymbol = Symbol('rating');
const tagSymbol = Symbol('tag');

addMetadata(book, reviewSymbol, 'very good book!');
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagSymbol, '#smartReading');

console.log(getMetadata(book, reviewSymbol));
console.log(getMetadata(book, ratingSymbol));
console.log(getMetadata(book, tagSymbol));
*/

/*
// Задание 2
// Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// 1. Создайте объект library, который содержит массив книг и имеет свойство- символ Symbol.iterator.
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.

const books = [
    { title: '1984', author: 'Gerge Orwell' },
    { title: 'Brave new world', author: 'Aldus Huxley' },
    { title: 'Fahrenheit 451', author: 'Ray Bradbury' }
];

books[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to 
            ? { done: false, value: books[this.current++] } 
            : { done: true };
        }
    }
}

for (const book of books) {
    console.log(`Название книги: ${book.title}, Автор: ${book.author}`);
}
    */

/*
// Задание 3
// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.
// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и фильтрует только те из них, у которых есть атрибут data-active.
// Выведите результат на консоль.

function filterActiveDivs() {
    const divEls = document.querySelectorAll('div');

    const divsArray = Array.from(divEls);

    const activeDivs = divsArray.filter(element => element.hasAttribute("data-active"));

    activeDivs.forEach(element => { 
        console.log(element); 
    });
}

filterActiveDivs();
*/

/*
// Задание 4
// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
// 1. Map будет использоваться для хранения соответствия между уроком и преподавателем.
// 2. Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.

const lesson = new Map();

lesson.set('Математика', 'Смирнов');
lesson.set('История', 'Иванов');

const studentLessons = new Set().add('Математика').add('История');

const students = new Map();

students.set('Студент', studentLessons);

console.log(`Препод по математике: ${lesson.get('Математика')}`);
console.log(`Уроки Студента: ${[...students.get('Студент')]}`);
*/