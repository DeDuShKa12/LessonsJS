// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// //
//
//
// class User {
//
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//
//     }
// }
//
//
// let Users = [];
//
// for (let i = 0; i < 10; i++) {
//     let newUser = new User(i + 1, 'koks', 'koksov', '12121212@gmail.com', '0977772929')
//     Users.push(newUser)
//
// }
//
// console.log(Users);
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// //
// //
// // let result = Users.filter(value => value.id % 2 === 0)
// // console.log(result);
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// //
// //
// // let result = Users.sort((a,b) => {return b.id - a.id})
// // console.log(result)
//
//
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client extends User {
//
//     constructor(id, name, surname, email, phone, order) {
//         super(id, name, surname, email, phone);
//         this.order = order;
//     }
// }
//
// let  Clients = [];
//
//
// for (let i = 0; i < 10; i++) {
//     let Order = Math.random() * 10
//     Order = Math.round(Order)
//     let newClient = new Client(i + 1, 'koks', 'koksov', '12121212@gmail.com', '0977772929', Order)
//     Clients.push(newClient)
//
// }
// console.log(Clients);
//
//
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// let result1 = Clients.sort((a,b) => {return a.order - b.order})
// console.log(result1);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// function car(model, producer, year, maxS, vEngine,) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxS = maxS;
//     this.vEngine = vEngine;
//
//     this.drive = function () {
//         return `їдемо зі швидкістю ${maxS} на годину`
//     }
//     this.info = function () {
//         for (const infoElement in this) {
//             if (typeof this[infoElement] !== 'function') {
//                 console.log(`${infoElement} - ${this[infoElement]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxS += newSpeed
//
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
//
//
// }
//
//
// let newCar = new car('audi', 'wag', 11, 220, '2.0')
// console.log(newCar.drive());
// newCar.info()
// newCar.increaseMaxSpeed(30)
// newCar.changeYear(2011)
// newCar.addDriver('Vasya')
// console.log(newCar);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// class car{
//     constructor (model, producer, year, maxS, vEngine,) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxS = maxS;
//     this.vEngine = vEngine;
//     }
//
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxS} на годину`)
//     }
//     info () {
//         for (const infoElement in this) {
//             if (typeof this[infoElement] !== 'function') {
//                 console.log(`${infoElement} - ${this[infoElement]}`);
//             }
//         }
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxS += newSpeed
//
//     }
//     changeYear (newValue) {
//         this.year = newValue
//     }
//     addDriver (driver) {
//         this.driver = driver
//     }
//
//
// }
//
//
// let newCar = new car('audi', 'wag', 11, 220, '2.0')
// newCar.drive()
// newCar.info()
// newCar.increaseMaxSpeed(30)
// newCar.changeYear(2011)
// newCar.addDriver('Vasya')
// console.log(newCar);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
//
// function popelushka(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// let popArray = []
//
// for (let i = 0; i < 10; i++) {
//     function randomNum (min, max) {
//         return Math.floor(Math.random() * (max - min) ) + min;
//     }
//     let pFootSize = randomNum(34,40)
//     let newPopel = new popelushka('Kurka', 33, pFootSize)
//     popArray.push(newPopel)
// }
//
// console.log(popArray);
//
//
// let prince = {
//     name: 'Kokos' ,
//     age: '32',
//     shoe: 37,
// }
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// for (let i = 0; i < popArray.length; i++) {
//     if (prince.shoe === popArray[i].footSize) {
//         console.log(popArray[i])
//     }
//
// }
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
// find = popArray.find((value) => value.footSize === prince.shoe)
// console.log(find)