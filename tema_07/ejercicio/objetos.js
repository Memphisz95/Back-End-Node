// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos = {
    nombre: "Adrian",
    apellido: "Sanchez",
    edad: 26,
    altura: 175,
    eresDesarrollador: false
};
console.log(datos);

// Una variable que obtenga tu edad a partir del objeto anterior
const edad = "edad";
console.log(datos[edad]);

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista_amigos = [
    {nombre: "Adrian", edad: 26},
    {nombre: "Alejandro", edad: 25},
    {nombre: "Angels", edad: 23},
    {nombre: "Carlos", edad: 19}
];

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const ordenar = lista_amigos.sort((a, b) => a.edad + b.edad);
console.log(ordenar);