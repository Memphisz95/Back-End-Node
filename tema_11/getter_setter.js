// // Clases en Javascript
class Persona {
    // # = Private
    // _ = Protected
    #nombre;
    #edad;
    #obtenEdad;
    _isDeveloper = true;

    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    // Getters and Setters
    // Getters -> métodos que obtenemos valores de atributos privados o protegidos
    // Setters -> métodos que permite modificar el valor de atributos privados o protegidos

    saludo() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }

    getNombre() { // Esto sería un método getter
        return this.#nombre;
    }

    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad;
    }

    getEdad() {
        return this.#edad;
    }
}

const persona = new Persona("Adrian", 26);
console.log(persona);
console.log(persona.nombre);

const nombre = persona.getNombre();
console.log(nombre);

const edad = persona.getEdad();
console.log(edad);

persona.setEdad(27);
console.log(persona.getEdad());