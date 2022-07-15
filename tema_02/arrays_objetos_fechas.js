// Listas, array o arreglos
const lista = [1, 2, 3, 4, 5, 6];
console.log(lista);

const lista2 = new Array();
console.log(lista2);

const lista3 = lista.slice();
console.log(lista3);

// Objetos
const movil = {
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Manolo", "Angels", "Ana", "Miguel"],
    memoria_ram: "4GB"
};

console.log(movil);
console.log(movil.marca);
console.log(movil.memoria_ram);

movil.marca = "Samsung";
console.log(movil.marca);

// Fechas
// Librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2021, 2, 22);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anio = ahora.getFullYear();
console.log(dia, mes, anio);