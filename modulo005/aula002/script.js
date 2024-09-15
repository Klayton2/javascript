fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify({
        title:'Minha Página',
        body: 'Meu conteúdo',
        userId: 10
    }),
    headers:{
        'content-type': 'application/json; charset=UTF-8'
    }
})
.then(response => response.json())
.then(json => console.log(json));