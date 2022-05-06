class Conta{
    #titular
    #numero
    constructor(titular,numero){
        this.#titular = titular
        this.#numero = numero 
   }
   set titular(titular){this.#titular = titular}
   get titular(){ return this.#titular}

   set numero(numero){this.#numero = numero}
    get numero() { return this.#numero }
    toString(){return "Titular:" + this.titular + ",numero:" + this.numero}
}
class ContaEspecial extends Conta{
    #limite
    constructor(limite,titular,numero){
        super(titular , numero), this.#limite = limite
    }
    set limite(limite){this.#limite = limite}
    get limite(){return this.#limite}
toString(){ return super.toString()+ ",Limite:" + this.#limite }
}
class Poupança extends Conta{
    #aniversario
    constructor(aniversario,titular,numero){
       super(titular,numero), this.#aniversario = aniversario
    }
    set aniversario(aniversario){this.#aniversario = aniversario}
    get aniversario(){return this.#aniversario}
    toString(){return super.toString() + ",Aniversario: " + this.#aniversario}
}
let banco = new ContaEspecial ("R$200,00","Marcyelen" , "51024525")
console.log(banco.toString());
let banco2 = new Poupança ("23/01/2004", "Marcyelen" , "51024525")
console.log(banco2.toString());