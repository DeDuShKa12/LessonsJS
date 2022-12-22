// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно
// що це блоки (дати фон. марджини і тд)

let url = new URL(location.href);
let data = url.searchParams.get('data');
let parse = JSON.parse(data);

let postInfo = document.createElement('div');
postInfo.classList.add('postInfo')
let postText = document.createElement('div');
postText.classList.add('postText')
document.body.append(postInfo, postText)

for (const item in parse) {
    if (typeof parse[item] === 'number') {
        let Info = document.createElement('div');
        Info.classList.add('Info')
        Info.innerText = `${item} --- ${parse[item]}`
        postInfo.appendChild(Info)
    } else {
        let Text = document.createElement('div');
        Text.classList.add('Text')
        Text.innerText = `${parse[item]}`
        postText.append(Text)
    }

}
console.log(parse.id);


fetch(`https://jsonplaceholder.typicode.com/posts/${parse.id}/comments`)
    .then(value => value.json())
    .then(value => {
        let commentsDiv = document.createElement('div');
        commentsDiv.classList.add('comments')
        document.body.appendChild(commentsDiv)

        for (let element of value) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment')
            commentsDiv.append(commentDiv)

            for (const key in element) {
                if (key === 'id') {

                    fetch(`https://jsonplaceholder.typicode.com/users/${element.id}`)
                        .then(value => value.json())
                        .then(value => {

                            let nameComentator = document.createElement('div');
                            nameComentator.innerText = `${value.name}`
                            commentDiv.prepend(nameComentator)

                        })
                } else {
                    let comment = document.createElement('div');

                    comment.innerText = `${key} ${element[key]}`

                    commentDiv.append(comment)
                }
            }

        }

    })

