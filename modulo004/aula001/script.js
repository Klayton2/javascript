var p = document.getElementsByTagName('p');

alert(p.length);

for (var i = 0; i < p.length; i++){
    p[i].innerHTML = 'Manipulado via JS ' + i;
}