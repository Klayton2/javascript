var resquest = new XMLHttpRequest();

resquest.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

resquest.onload = ()=>{
    if(resquest.status >= 200 && resquest.status < 400){
        //resquest feito com sucesso
        var data = JSON.parse(resquest.response);
        console.log(data);
    }else{
        //erro
    }
}

resquest.onerror = ()=>{

}

resquest.send();



