class Animal {
    #nome
    constructor(nome){this.#nome = nome }
    toString(){return "Nome:" + this.#nome }
    set nome(nome) { this.#nome = nome }
    getFalar(){return "Animal fala"}
    get nome() { return this.#nome }
}
class Gato extends Animal {
    #raca
    constructor(nome, raca) { super(nome), this.#raca = raca }
    set raca(raca){this.#raca = raca }
    get raca() { return this.#raca }
    getFalar(){return "Gato mia"}
    toString() { return super.toString() + ",Raça:" + this.#raca }
}
class Cachorro{
    #nome
    constructor(nome){this.#nome = nome}
    toString(){return "Nome:" + this.#nome}
    set nome(nome) { this.#nome = nome }
    getFalar(){ return"Cão late"}
    get nome() { return this.#nome }
}

class Morcego{
    #tamanho
    #cor
    constructor(tamanho,cor) 
    {this.#tamanho = tamanho
    this.#cor = cor}
    toString(){return "tamanho:" + this.#tamanho + ",cor:" + this.#cor}
    
    
}
//let animal = new Animal("Gambá")
//console.log(animal.toString());
//let gato = new Gato("Mimosa", "Viralata")
//console.log(gato.toString())
//let cachorro = new Cachorro("Pitoco")
// console.log(cachorro.toString());
// console.log(animal.getFalar(),gato.getFalar(), cachorro.getFalar())
const listaAnimais = ()=> {
    let p = document.getElementById("Resultado")
    let animal = new Animal("Gambá")
    let gato = new Gato("Mimosa", "Viralata")
    let cachorro = new Cachorro("Pitoco")
    let morcego = new Morcego("10cm"," Preto")
    p.innerHTML = "<b>" + animal.toString() + "<br><br>"+
    "<b>" + gato.toString() + "<br><br>"+
    "<b>" + cachorro.toString() + "<br><br>" +
    "<b>" + morcego.toString() + "<br><br>"
}
listaAnimais()