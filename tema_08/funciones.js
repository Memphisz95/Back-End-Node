// Funciones en Javascript
function saludar(nombre = "Adrian") {
    return `Hola ${nombre}`;
}

console.log(saludar("Ana"));
console.log(saludar());

const getEdad = (edad, nombre) => {
    return saludar(nombre) + `, tu edad es ${edad}`;
}

console.log(getEdad(26, "Miguel"));

const persona = {
    nombre: "Adrian",
    edad: 26
};

console.log(getEdad(persona.edad, persona.nombre));

const persona_2 = {...persona};
persona_2.edad = 27;
console.log(persona_2);

function suma(...numeros) {
    return numeros.reduce((a, b) => a + b);
}

console.log(suma(1, 2, 3, 4 , 5, 6, 7, 8, 9, 10));