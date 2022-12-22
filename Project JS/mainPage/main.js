// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра
// має детальну інфорацію про об'єкт на який клікнули
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('mainDiv')
        document.body.appendChild(mainDiv)
        let div1 = document.createElement('div');
        div1.classList.add('innerDivs')
        let div2 = document.createElement('div');
        div2.classList.add('innerDivs')
        mainDiv.append(div1, div2)


        for (i = 0; i < value.length; i++) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv')

            let infoDiv = document.createElement('div');
            infoDiv.classList.add('text')
            infoDiv.innerHTML = `${value[i].id}. <b>${value[i].name}</b>`
            userDiv.append(infoDiv)


            let btnUserDetails = document.createElement('button');
            btnUserDetails.classList.add('button')
            let a = document.createElement('a');
            a.innerText = 'More information'
            a.href = `../userDetailsPage/user-details.html?id=${value[i].id}`
            btnUserDetails.appendChild(a)
            userDiv.appendChild(btnUserDetails)
            mainDiv.append(userDiv)
            if (i % 2 === 0) {
                div1.append(userDiv)
            } else if (i % 2 !== 0) {
                div2.append(userDiv)
            }


        }
    })