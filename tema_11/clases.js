// Clases en Javascript
class Persona {
    nombre;
    edad;
    isDeveloper;

    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const nueva_persona = new Persona("Adrian", 26, true); // instanciar
console.log(nueva_persona);
nueva_persona.saludo();