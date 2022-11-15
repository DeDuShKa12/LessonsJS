// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function rectangle(a, b) {
//     let result = a * b
//     console.log(result);
//     return result;
// }


// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// const P = 3.14
// function circ(r) {
//     let res = P * (r * r)
//     console.log(res);
//     return res
// }


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// const P = 3.14
//
// function cylinder(r, h) {
//     let res = (2 * P * (r * r)) + (2 * P * r * h)
//     console.log(res);
//     return res
// }


// - створити функцію яка приймає масив та виводить кожен його елемент
//
// arr = [1, 2, 3, 4, 5]
//
// function f(array) {
//     for (ar of array)
//         console.log(ar);
//         return ar
//
// }
//
// f(arr)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function text (p, t) {
//     document.write(`<${p}>${t}</${p}>`)
//
// }
// text('p','lorem')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function text(ul, li, t) {
//     document.write(`<${ul}>
// <${li}>${t}</${li}>
// <${li}>${t}</${li}>
// <${li}>${t}</${li}>
// </${ul}>`)
//
// }
//
// text('ul','li', 'lorem')
//
// або
//
// function text(t) {
//     document.write(`<ul>
// <li>${t}</li>
// <li>${t}</li>
// <li>${t}</li>
// </ul>`)
//
// }
//
// text('lorem')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function text(t, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${t}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// text('lorem', 3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// arr = [1,2,3,4,'str', true]
//
// function list(array) {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
//
// }
//
// list(arr)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let users = [
//     {name: 'vasya', age: 31, id: false},
//     {name: 'petya', age: 30, id: true},
//     {name: 'kolya', age: 29, id: true},
//     {name: 'olya', age: 28, id: false},
//     {name: 'max', age: 30, id: true},
//     {name: 'anya', age: 31, id: false},
//     {name: 'oleg', age: 28, id: false},
//     {name: 'andrey', age: 29, id: true},
//     {name: 'masha', age: 30, id: true},
//     {name: 'olya', age: 31, id: false},
//     {name: 'max', age: 31, id: true}]
//
// function list(array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<div class="ob">${array[i].name} ${array[i].age} ${array[i].id}</div>`)
//     }
//
// }
//
// list(users)


// - створити функцію яка повертає найменьше число з масиву
//
// arr = [100, 2, 3, 4, 5, 6, 7, 1]
//
// function f(array) {
//     min = Math.min(...array)
//     console.log(min)
//     return (min)
// }
// f(arr)
//


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let arr = [100, 2, 3, 4, 5, 6, 7, 1]
// let numb = (array) => {
//     let i = 0
//     for (const arrayElement of array) {
//         i += arrayElement;
//
//     }
//     return i;
// }
//
// let  res = numb(arr)
// console.log(res)