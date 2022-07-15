// Funciones flechas y anónimas
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = array.map((valor) => valor * 2);

console.log(array2);

// Función anónima dentro de una constante para poder ser llamada
const suma = (...numeros) => numeros.reduce((a, b) => a + b);
console.log(suma(5, 12, 43, 21));

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

const operaciones = (a, b) => {
    return `Suma: ${sumar(a, b)} Resta: ${restar(a, b)} Multiplicación: ${multiplicar(a, b)} División: ${dividir(a, b)}`;
}

console.log(operaciones(10, 5));