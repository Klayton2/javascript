let cont = 0;

const botao = document.querySelectorAll('.botao');

const reset = document.getElementById('reset');


botao.forEach(botaos => {
    botaos.addEventListener('click',()=>{
        cont += 1;

        alert(cont);
    });
});

reset.addEventListener('click',()=>{
    cont = 0;
    alert('Contador resetado');
});