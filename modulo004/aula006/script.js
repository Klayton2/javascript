var conteudo = document.querySelectorAll('.conteudo');

conteudo.forEach(conteudo =>{
    var span = conteudo.querySelector('span');
    var p = conteudo.querySelector('p');

    span.addEventListener('click',()=>{
        if(p.classList.contains('mostrar')){
            p.classList.remove('mostrar');
            span.innerHTML = 'Ver mais!';
        
        }else{
            p.classList.add('mostrar');
            span.innerHTML = 'Ocultar';
        }
    });
});