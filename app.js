// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))

// 1. Then
fetch("https://jsonplaceholder.typicode.com/users/1").then(httpData => {
    httpData.json().then(specData => {
        console.log(specData)
    })
})

// 2. Async/Await