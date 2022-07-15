// Herencia
class Persona {
    _nombre;
    _edad;

    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }

    saludo() {
        console.log(`Hola mi nombre es ${this._nombre} y tengo ${this._edad} años.`);
    }

    getNombre() { // Esto sería un método getter
        return this._nombre;
    }

    setEdad(nuevaEdad) {
        this._edad = nuevaEdad;
    }

    getEdad() {
        return this._edad;
    }
}

class Desarrollador extends Persona{
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad); // llama al constructor de la clase Persona
        this.lenguaje = lenguaje;
    }

    saludo() {
        super.saludo(); // Polimorfismo
        console.log(`Hola soy desarrollador del lenguaje ${this.lenguaje}`); // Polimorfismo
    }
}

const nuevoDev = new Desarrollador("Adrian", 26, "Javascript");
console.log(nuevoDev);
console.log(nuevoDev.saludo());

// Polimorfismo => varias formas