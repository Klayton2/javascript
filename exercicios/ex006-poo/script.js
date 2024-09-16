class Endereco{
    constructor(rua, cidade, estado){
        this.rua = rua;
        this.cidade = cidade;
        this.estado = estado;
    }
}

class Cliente {
    constructor(nome, endereco){
        this.nome = nome;
        this.endereco = endereco;
    }

    mostrarEndereco(){
        console.log(`${this.nome} mora na rua ${this.endereco.rua}, na cidade de ${this.endereco.cidade}, no estado de ${this.endereco.estado}.`);
    }
}

meuEndereco = new Endereco('Manoel Messias', 'Nova Ponte', 'Minas Gerais');

cliente = new Cliente('Klayton', meuEndereco);

cliente.mostrarEndereco();