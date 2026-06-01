class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }
    calcArea(){
        let area = this.largura * this.altura
        return console.log(area);
    }
}

retangulo = new Retangulo(5, 10);

retangulo.calcArea();