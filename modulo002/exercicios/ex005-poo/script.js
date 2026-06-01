class Animal{
    constructor(nome){
        this.nome = nome;
    }
    som(){
        console.log(`${this.raca} está emitindo um som.`);
    }
}

class Cachorro extends Animal{
    constructor(nome, raca){
        super(nome);
        this.raca = raca;
    }
    som(){
        console.log(`${this.nome} está latindo !`);
    }
}

class Gato extends Animal{
    constructor(nome, raca){
        super(nome);
        this.raca = raca;
    }
    som(){
        console.log(`${this.nome} está miando !`);
    }
}

cachorro = new Cachorro('Pipoca');

cachorro.som();

gato = new Gato('Agatha');

gato.som();