class Animal {
    constructor(name, tipo) {
        this.name = name;
        this.tipo = tipo;
    }
    emitirSonido(){
        console.log('animal ')
    }
}

// se está haciendo una clase nueva, no se está utilizando la herencia.
class Perro extends Animal{ // extends para traer el constructor Animal
    constructor(name, tipo, raza) {
        super(name, tipo); // se utilizar super para utilizar class base
        this.raza = raza;
    }
    emitirSonido() {
        console.log('guau');
    }
    correr() {
        console.log(`${this.name} corre feliz`)
    }
}

const perro1 = new Perro ('Zeus', 'margi', 'biggol')

perro1.correr();

//clase Prototipos en la práctica

perro1.nuevoMetodo = function () {
    console.log('Este es un método')
} // estaría agregando un método solo a la instancia, aquí no toma herencia. Se tiene que inyectar al prototipo que se genera
// la forma de hacerlo es

perro1.prototype.segundoMetodo = function () {
    console.log('nuevo método')
}