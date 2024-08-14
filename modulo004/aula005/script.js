var box = document.querySelectorAll('.box')[0];
setTimeout(()=>{
    box.classList.add('animEsquerda');
},1000);

box.addEventListener('click',()=>{
    box.classList.add('animEsquerda2');
})