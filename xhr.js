const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url) // открываем

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        } //нетворк ошибки

        xhr.send(JSON.stringify(body)) //сюда отправляем
    })
}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .then(err => console.log(err))

const body = {
    name: 'Danila',
    age: 19
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .then(err => console.log(err))