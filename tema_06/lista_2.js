// Concatenación y obtención de fragmentos
let lista_1 = [1, 2, 3, 4];
let lista_2 = [5, 6, 7, 8];
console.log(lista_1.concat(lista_2));

lista_3 = lista_1.concat(lista_2);
console.log(lista_3);

// Otra forma de concatenar es ...lista_1 ... lista_2
lista_4 = [...lista_1, ...lista_2];
console.log(lista_4);

// Obtener una lista a partir de otra .slice()
const array = [1, 1, 3, 4, 5, 76];
const array_2 = array.slice(3, 6);
console.log(array);
console.log(array_2);