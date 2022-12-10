// // - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// //
// //     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
//
//
//
// for (const simpson of simpsons) {
//     let div = document.createElement('div', );
//     div.setAttribute('class', 'member');
//     div.innerText = `name - ${simpson.name}, surname - ${simpson.surname}, age - ${simpson.age}, ${simpson.info}, ${simpson.photo} `
//     document.body.appendChild(div)
//
// }



// Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png
//
// for (const coursesArrayElement of coursesArray) {
//     let div0 = document.createElement('div');
//     div0.setAttribute('class', 'main')
//     document.body.appendChild(div0)
//     let div1 = document.createElement('div');
//     div1.setAttribute('class','title')
//     let div2 = document.createElement('div');
//     div2.setAttribute('class','monthDuration')
//     let div3 = document.createElement('div');
//     div3.setAttribute('class','hourDuration')
//     let divForLi = document.createElement('div');
//     divForLi.setAttribute('class', 'divOfModuls')
//     let ul = document.createElement('ul');
//     ul.setAttribute('class','modules')
//     div1.innerHTML = `${coursesArrayElement.title}`
//     div2.innerHTML = `Month Duration: ${coursesArrayElement.monthDuration}`
//     div3.innerHTML = `Hour Duration: ${coursesArrayElement.hourDuration}`
//     let div00 = document.createElement('div')
//     div00.setAttribute('class', 'lowerMain')
//     div00.append(div2, div3)
//     div0.append(div1, div00, divForLi)
//     divForLi.append(ul)
//
//
//     for (let i = 0; i < 3; i++) {
//         let div = document.createElement('div');
//         div.setAttribute('class','modulesName3')
//         div.innerHTML = `${coursesArrayElement.modules[i]}`
//         divForLi.appendChild(div)
//
//     }
//
//     for (let i = 3; i < coursesArrayElement.modules.length; i++) {
//         let li = document.createElement('li');
//         li.setAttribute('class','modulesName')
//         li.innerHTML = `${coursesArrayElement.modules[i]}`
//         ul.appendChild(li)
//
//     }
//     divForLi.append(ul)
//
// }



// //     - створити блок,
//
// let newDiv = document.createElement("div");
//
// //     - додати йому класи wrap, collapse, alpha, beta
//
// newDiv.classList.add('wrap', 'collapse', 'alpha', 'beta')
//
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//
// newDiv.style.background = 'grey'
// newDiv.style.color = 'red';
// newDiv.style.fontSize = '30px';
// newDiv.style.width = '200px'
// newDiv.style.height = '200px'
//
// // - додати цей блок в body.
//
// document.body.append(newDiv)
//
// // - клонувати його повністю, та додати клон в body.
//
// document.body.append(newDiv.cloneNode(true))




// // - Є масив:
//   let arr = ['Main','Products','About us','Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
// let menuBlockList = document.getElementsByClassName('menu');
// let menuBlock = menuBlockList[0]
//
//
// for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = `${arr[i]}`
//     menuBlock.appendChild(li)
// }





// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
//
//
// for (const cours of coursesAndDurationArray) {
//     let div1 = document.createElement("div");
//     let div2 = document.createElement("div");
//     div1.append(`${cours.title}`)
//     div2.append(`${cours.monthDuration}`)
//     document.body.append(div1, div2)
// }



// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //
// //
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
//
// for (const ArrayElement of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item')
//     document.body.append(div)
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading')
//     h1.innerText = `${ArrayElement.title}`
//     div.append(h1)
//     let p = document.createElement('p');
//     p.classList.add('description')
//     p.innerText = `${ArrayElement.monthDuration}`
//     div.append(p)
// }



// //     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
// let div = document.createElement('div')
// div.innerText = 'Lorem'
// div.setAttribute('id', 'text')
// let button = document.createElement('button')
// button.innerText = 'push'
// document.body.append(div,button)
// button.onclick = () => {
//     div.style.display = 'none'
// }



// //     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// //     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'click'
// document.body.append(input, button)
// button.onclick = function (e) {
//     input.onclick;
//     if (input.value < 18 ) {
//        return  document.write('ще малий')
//     }
//     else if (input.value > 18) {
//         return document.write('старічьок')
//     }
//
// }



// // *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
//
//
// let button = document.createElement('button');
// button.innerText = 'click'
// document.body.append(button)
// let input1 = document.createElement('input');
// document.body.append(input1)
// let input2 = document.createElement('input');
// document.body.append(input2)
// let input3 = document.createElement('input');
// document.body.append(input3)
// let ul = document.createElement('ul');
// document.body.append(ul)
//
// button.onclick = function () {
// for (let i = 0; i < input1.value; i++) {
//     let li = document.createElement('li');
//     li.innerText = 'text'
//     ul.append(li)
// }
//
// for (let i = 0; i < input2.value; i++) {
//     let div = document.createElement('div');
//     document.body.append(div)
//     div.style.height = '100px'
//     div.style.width = '100px'
//     div.style.background = 'red'
//     div.innerText = input3.value
// }
//
// }