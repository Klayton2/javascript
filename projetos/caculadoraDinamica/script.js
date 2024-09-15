document.getElementById('calcular').addEventListener('click',() =>{
    let num1 = parseFloat(document.getElementById('numero1').value);

    let num2 = parseFloat(document.getElementById('numero2').value);

    let sinal = document.getElementById('operacao').value.trim();

    let resultadoLabel = document.getElementById('resultado');

    if(isNaN(num1) || isNaN(num2)){
        resultadoLabel.innerHTML = 'Resultado: Por favor insira números válidos !';
        return;
    }

    let resultado;
    switch(sinal){
        case '+':
            resultado = num1 + num2;
            
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if(num2 != 0){
                resultado = num1 / num2;
            }else{
                resultado = 'Erro: Divisão por zero ! ';
            }
            break;
        case '^':
            resultado = Math.pow(num1,num2);
            break;
        default:
            resultado = 'Operação inválida !';
            break;
    }
    resultadoLabel.innerHTML = `Resultado: = ${resultado}`;
});

