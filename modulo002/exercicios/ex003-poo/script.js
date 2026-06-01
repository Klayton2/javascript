class Pessoa{
    constructor(nome , idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        return console.log('Meu nome é '+this.nome+' e tenho '+this.idade+ ' anos');
    }
}

class Aluno extends Pessoa{
    constructor(nome ,idade ,curso){
        super(nome, idade);
        this.curso = curso;
    }
    apresentar(){
        return console.log('Meu nome é '+this.nome+' e tenho '+this.idade+ ' anos e faço '+this.curso+' !');
    }
}

pessoa = new Pessoa('Klayton', 21);

pessoa.apresentar();

aluno = new Aluno('Klayton', 21, 'Sistema de Informação');

aluno.apresentar();