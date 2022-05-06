class Veiculo{
    #nome
    #marca
    constructor(nome,marca){
        this.#nome = nome
        this.#marca = marca
    }
    set nome(nome){this.#nome = nome}
    get nome(){return this.#nome}

    set marca(marca){this.#marca = marca}
    get marca(){return this.#marca}
    toString(){return "Nome:" + this.nome + ",Marca:" + this.marca}
}
class carro extends Veiculo{
    #portas
    constructor(portas,nome,marca){
        super(nome,marca), this.#portas = portas 
    }
    set portas(portas){this.#portas = portas}
    get portas(){return this.#portas}
    toString(){ return super.toString()+ ",Porta:" + this.#portas }
}
class Caminhao extends Veiculo{
    #eixos
    constructor(eixos,nome,marca){
        super(nome,marca),this.#eixos = eixos
    }
    set eixos(eixos){this.#eixos = eixos}
    get eixos(){return this.#eixos}
    toString(){return super.toString()+ ",Eixos:" + this.#eixos}
}
let conceissonaria = new carro ("5","Gol g6" , "Volkswagen" )
console.log(conceissonaria.toString());
let conceissonaria2 = new Caminhao(2, "Caminhao Cegonha", "Volkswagen")
console.log(conceissonaria2.toString());