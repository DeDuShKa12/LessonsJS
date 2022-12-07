// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world'
// let str2 = 'lorem ipsum'
// let str3 = 'javascript is cool'
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// let str = 'hello world'
// let str1 = 'lorem ipsum'
// let str2 = 'javascript is cool' ;
//
// console.log(str.toUpperCase());
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// let str = 'HELLO WORLD'
// let str1 = 'LOREM IPSUM'
// let str2 = 'JAVASCRIPT IS COOL'
// console.log(str.toLowerCase());
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// str = ' dirty string   '
// console.log(str.replaceAll(' ', '')
//     .replaceAll('ys', 'y s'));
//
// let str1 = str.trim()
// console.log(str1);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні'
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// function stringToarray (str){
//     let arr = str.split(' ')
//     console.log(arr)
//
// }


// let str = 'Ревуть воли як ясла повні'
// stringToarray(str)


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
//
// let map = arr.map(item => {return String(item)})
//
// console.log(map)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let dir1 = 'ascending'
// let dir2 = 'descending'
// function sortNums (nums,dir) {
//     if (dir === 'ascending')
//     console.log(nums.sort((num1, num2) => {
//         return num1 - num2
//     }))
//     if (dir === 'descending')
//     console.log(nums.sort((num1, num2) => {
//         return num2 - num1
//     }))
// }
// sortNums(nums,dir2)


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
//
// console.log(coursesAndDurationArray.sort((a,b) => {return a.monthDuration - b.monthDuration}))
//
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5))

// описати колоду карт

// let cards = [
//     {cardSuit: 'Spade', value: 6, color: 'Black'},
//     {cardSuit: 'Clubs', value: 6, color: 'Black'},
//     {cardSuit: 'Hearts', value: 6, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 6, color: 'Red'},
//     {cardSuit: 'Spade', value: 7, color: 'Black'},
//     {cardSuit: 'Clubs', value: 7, color: 'Black'},
//     {cardSuit: 'Hearts', value: 7, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 7, color: 'Red'},
//     {cardSuit: 'Spade', value: 8, color: 'Black'},
//     {cardSuit: 'Clubs', value: 8, color: 'Black'},
//     {cardSuit: 'Hearts', value: 8, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 8, color: 'Red'},
//     {cardSuit: 'Spade', value: 9, color: 'Black'},
//     {cardSuit: 'Clubs', value: 9, color: 'Black'},
//     {cardSuit: 'Hearts', value: 9, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 9, color: 'Red'},
//     {cardSuit: 'Spade', value: 10, color: 'Black'},
//     {cardSuit: 'Clubs', value: 10, color: 'Black'},
//     {cardSuit: 'Hearts', value: 10, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 10, color: 'Red'},
//     {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Spade', value: 'King', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'King', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'King', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}
// ];

// - знайти піковий туз
//
// let filter = cards.filter(card=>{return card.value === 'Ace' && card.cardSuit === 'Spade'})
// console.log(filter);

// - всі шістки
//
// let filter = cards.filter(card => {return card.value === 6})
// console.log(filter);

// - всі червоні карти
//
// let red = cards.filter(card=> {return card.color === 'Red'})
// console.log(red);

// - всі буби
//
// let diam = cards.filter(card => card.cardSuit === 'Diamonds')
// console.log(diam);

// - всі трефи від 9 та більше
//
// let filter = cards.filter(card=> card.value >= 9 || card.value === 'Jack' || card.value === 'Queen' || card.value === 'King' || card.value === 'Ace')
// console.log(filter)

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }



// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//
// let reduce = cards.reduce((accumulator, card) => {
//     if ( card.cardSuit === 'Spade'){
//         accumulator.spades.push(card.value)}
//     if ( card.cardSuit === 'Diamonds'){
//         accumulator.diamonds.push(card.value)}
//     if ( card.cardSuit === 'Hearts'){
//         accumulator.hearts.push(card.value)}
//     if ( card.cardSuit === 'Clubs') {
//         accumulator.clubs.push(card.value)}
//     return accumulator
// }, {spades:[],diamonds:[], hearts:[], clubs:[]})
// console.log(reduce);