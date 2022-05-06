class Pessoa{
    #nome
    #cpf
    constructor(nome,cpf){
        this.#nome = nome
        this.#cpf = cpf
    }
    set nome(nome){this.#nome = nome}
    get nome(){ return this.#nome }
 
    set cpf(cpf){this.#cpf = cpf}
    get cpf() { return this.#cpf }
    toString(){return "Nome:" + this.nome + ",Cpf:" + this.cpf}
}
class cliente extends Pessoa {
    #whatsapp
    constructor(whatsapp,nome,cpf){
        super(nome, cpf),this.#whatsapp = whatsapp
    }
    set whatsapp(whatsapp){this.#whatsapp = whatsapp}
    get whatsapp(){return this.#whatsapp}
    toString(){ 
        return super.toString() + ",Whatsapp:" + this.whatsapp}
}
class Funcionarios extends Pessoa{
    #areaTrabalho 
    constructor(areaTrabalho,whatsapp,nome,cpf){
       super(whatsapp,nome,cpf),this.#areaTrabalho = areaTrabalho
    }
    set areaTrabalho(areaTrabalho){this.#areaTrabalho = areaTrabalho}
    get areaTrabalho(){return this.#areaTrabalho}
        toString(){return super.toString() + ",areaTrabalho:" + this.areaTrabalho}
    
}
let whatsapp = new cliente("(51)996546387","Paula","1221381458" )
console.log(whatsapp.toString());
let funcionarios = new Funcionarios("Rh", "Batista" , "14525552525")
console.log(funcionarios.toString())



    
 