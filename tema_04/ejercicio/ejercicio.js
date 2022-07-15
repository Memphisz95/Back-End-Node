// Ejercicio del tema 4
let nombre = "Adrian ";
let apellido = "Sanchez";
let estudiante = nombre.concat(apellido);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let numeroLetras = estudiante.length;
let primera_letra = nombre.charAt(0);
let ultima_letra = apellido.charAt(apellido.length - 1);
let quitar_espacios = estudiante.replace(" ", "");
let comprobar_nombre = estudiante.includes(nombre);

console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(numeroLetras);
console.log(primera_letra);
console.log(ultima_letra);
console.log(quitar_espacios);
console.log(comprobar_nombre);