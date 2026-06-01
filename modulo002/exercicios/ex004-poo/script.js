class contaBancaria{
    constructor(saldo){
     this._saldo = saldo
     
    }

    depositar(valor){
        this._saldo += valor;
        console.log(`Depósito realizado ! Saldo atual: ${this._saldo}`);
    }

    sacar(valor){
        if(valor > this._saldo){
            console.log(`Erro! Valor insuficiente para saque. Saldo atual: ${this._saldo}`);
        }else{
            this._saldo -= valor;
            console.log(`Saque realizado com sucesso ! Saldo atual: ${this._saldo}`);
        }
    }
}   

conta = new contaBancaria(1500);

conta.depositar(500);

conta.sacar(1500);
