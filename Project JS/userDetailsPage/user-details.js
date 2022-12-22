// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .

const url = new URL(location.href);
const id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('mainBlock')
        document.body.appendChild(mainDiv)

        for (const item in value) {
            let userInfo = document.createElement('div');


            if (typeof value[item] !== 'object') {

                userInfo.innerText = `${item} --- ${value[item]}`


            } else {

                userInfo.innerText = `${item}:`


                for (const key in value[item]) {

                    let keyDiv = document.createElement('div');

                    if (typeof value[item][key] !== 'object') {

                        keyDiv.innerText = `${key} --- ${value[item][key]}`

                    } else {
                        keyDiv.innerText = `${key}:`
                        for (const element in value[item][key]) {
                            let innerKeyDiv = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object') {
                                innerKeyDiv.innerText = `${element} --- ${value[item][key][element]}`
                            }
                            keyDiv.append(innerKeyDiv)
                        }
                    }
                    userInfo.append(keyDiv)
                }

            }
            mainDiv.append(userInfo)


        }

        let h4 = document.createElement('h4');
        h4.innerText = `Post of current user`
        document.body.appendChild(h4)
        let btn = document.createElement('button')
        btn.classList.add('buttonForPosts')
        btn.innerText = `Show`
        document.body.appendChild(btn)

        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(value => value.json())
            .then(value => {
                let postDiv = document.createElement('div');
                postDiv.classList.add('postDiv')
                document.body.appendChild(postDiv)

                for (const post of value) {
                    let h3 = document.createElement('h3');
                    h3.innerText = `${post.title}`

                    let postBTN = document.createElement('button');
                    postBTN.classList.add('postButton')

                    postDiv.append(h3, postBTN)

                    let a = document.createElement('a');
                    a.href = '../postDetailsPage/post-details.html?data=' + JSON.stringify(post)
                    a.innerText = 'SHOW'
                    postBTN.append(a)

                }
                postDiv.hidden = true

                btn.onclick = () => {
                    if (postDiv.hidden === false) {
                        postDiv.hidden = true
                        btn.innerText = `Show`
                    }

                    else {
                        postDiv.hidden = false
                        btn.innerText = `Hide`
                    }
                }

            })

    })