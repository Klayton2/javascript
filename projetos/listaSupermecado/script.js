var itens = [];

document.querySelector('input[type=submit]').addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');

    var valorProduto = document.querySelector('input[name=valor_produto');
    itens.push({
        nome: nomeProduto.value,
        valor: valorProduto.value
    });
    let listaProduto = document.querySelector('.lista-produto');

    let soma = 0;

    listaProduto.innerHTML = "";
    
    itens.map((val)=>{
        soma+=parseFloat(val.valor);

        listaProduto.innerHTML+=
            `<div class="lista-produto-single">
                <h3>`+ val.nome+`</h3>
                <h3 class="price-produto"><span>R$ `+val.valor+`</span></h3>
            </div>
            `;
    })
    let total = document.querySelector('.soma-produto h1');

    total.innerHTML= `Total: R$ `+soma;
    
    soma = soma.toFixed(2);

    nomeProduto.value ="";

    valorProduto.value ="";
    
});

document.querySelector('button[name=limpar]').addEventListener('click',()=>{
    itens = [];
    
    document.querySelector('.lista-produto').innerHTML = "";

    document.querySelector('.soma-produto h1').innerHTML = "Total: R$ 0";
})