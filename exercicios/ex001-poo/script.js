class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalhes(){
        console.log(this.marca);
        console.log(this.modelo);
        console.log(this.ano);
    }
}

carro = new Carro('Honda','Civic',2023);
carro.detalhes();