var elementos = document.getElementsByClassName('box'); 

for(var i = 0; i < elementos.length; i++){
var el = elementos[i];

el.style.width = '100px';
el.style.height = '100px';
el.style.backgroundColor = 'black';
el.style.marginLeft = '200px';
el.style.borderWidth = 1;
el.style.borderColor = 'white';
el.style.borderStyle = 'solid';

}
