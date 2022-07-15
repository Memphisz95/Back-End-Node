// Manipulación de strings
let input = "adriAn";
let database = "Adrian";

console.log(input === database);
console.log(input.toLowerCase() === database.toLowerCase());

// Concatenar cadenas
let str_1 = "Primera cadena. ";
let str_2 = "Segunda cadena. ";

console.log(str_1.concat(str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Quitar espacios al inicio y final
let str_3 = " Hola, mi nombre es Adrian   ";
console.log(str_3.length);
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

let str_4 = "Hola";
console.log(str_4.charAt(1));
console.log(str_4[0]);

// Indexof()
let str_5 = "Hola Adrian";
console.log(str_5.indexOf("Adrian"));
console.log(str_5.lastIndexOf("Adrian"));