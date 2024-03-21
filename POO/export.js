
class Padre{
    constructor(frasecita){
        this.frase = frasecita
        this.hijos = []
    }

    decirFrasecita(){
        console.log(this.frase);
    }
    decirhijos(){
        console.log(this.hijos);
    }
    agregarhijos(hijo){
        this.hijos.push(hijo)
    }
}

module.exports = Padre;