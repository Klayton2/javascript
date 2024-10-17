var elementoPlayer = document.querySelectorAll('.player-option img');

var playerOpt = '';

var enemyOpt = '';

function resetOpacityPlayer(){
    for(var i = 0; i < elementoPlayer.length; i++){
        elementoPlayer[i].style.opacity= 0.3;
    }
}

function resetOpacityEnemy(){
    const elementoEnemy = document.querySelectorAll('.enemy-option img');

    for(var i = 0; i < elementoEnemy.length; i++){
        elementoEnemy[i].style.opacity = 0.3;
    }
}

function enemyPlay(){
    let enemy = Math.floor(Math.random()*3);

    const elementoEnemy = document.querySelectorAll('.enemy-option img');

    resetOpacityEnemy();

    for(var i = 0; i < elementoEnemy.length;i++){
        if(i == enemy){
            elementoEnemy[enemy].style.opacity = 1;
            enemyOpt = elementoEnemy[enemy].getAttribute('opt');
        }
    }
    
}

function validarVitoria() {

    let vecendor = document.querySelector('.vencedor');
    
    if(playerOpt == "Pedra"){
        if(enemyOpt == "Pedra"){
            vecendor.innerHTML += `Você escolheu: `+playerOpt+`<br>A máquina escolheu: `+enemyOpt+`<br>Empate!`;

        }else if(enemyOpt == "Papel"){
            vecendor.innerHTML += `Você escolheu: `+playerOpt+`<br>A máquina escolheu: `+enemyOpt+`<br>Você Perdeu!`;

        }else if(enemyOpt == "Tesoura"){
            vecendor.innerHTML += `Você escolheu: `+playerOpt+`<br>A máquina escolheu: `+enemyOpt+`<br>Você Ganhou!`;
        }
    }

    if(playerOpt == "Papel"){
        if(enemyOpt == "Pedra"){
            vecendor.innerHTML += `Você escolheu: `+playerOpt+`<br>A máquina escolheu: `+enemyOpt+`<br>Você Ganhou!`;

        }else if(enemyOpt == "Papel"){
            vecendor.innerHTML += `Você escolheu: `+playerOpt+`<br>A máquina escolheu: `+enemyOpt+`<br>Empate!`;

        }else if(enemyOpt == "Tesoura"){
            vecendor.innerHTML += `Você escolheu: `+playerOpt+`<br>A máquina escolheu: `+enemyOpt+`<br>Você Perdeu!`;
        }
    }

    if(playerOpt == "Tesoura"){
        if(enemyOpt == "Pedra"){
            vecendor.innerHTML += `Você escolheu: `+playerOpt+`<br>A máquina escolheu: `+enemyOpt+`<br>Você Perdeu!`;

        }else if(enemyOpt == "Papel"){
            vecendor.innerHTML += `Você escolheu: `+playerOpt+`<br>A máquina escolheu: `+enemyOpt+`<br>Você Ganhou!`;

        }else if(enemyOpt == "Tesoura"){
            vecendor.innerHTML += `Você escolheu: `+playerOpt+`<br>A máquina escolheu: `+enemyOpt+`<br>Empate!`;

        }
    }
}

for(var i = 0; i < elementoPlayer.length; i++){
    elementoPlayer[i].addEventListener('click',(t)=>{
        resetOpacityPlayer();

        t.target.style.opacity = 1;

        playerOpt = t.target.getAttribute('opt');
        
        enemyPlay();

        validarVitoria();
    });
}
