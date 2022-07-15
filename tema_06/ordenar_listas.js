// Comparación entre listas y ordenación de listas
const numeros = [2, 4, 1, 3, 9, 6, 7];
console.log(numeros);

numeros.sort((a, b) => {
    if(a < b) {
        return -1;
    } else if(a > b) {
        return +1;
    } else {
        return 0;
    }
});
console.log(numeros);

numeros.sort((a, b) => b - a);
console.log(numeros);

// En arrays de objetos
const lista_obj = [
    {nombre: "Adrian", edad: 26},
    {nombre: "Miguel", edad: 56},
    {nombre: "Ana", edad: 54},
    {nombre: "Joana Aina", edad: 5}
];
const ordenar = lista_obj.sort((a, b) => a.edad - b.edad);
console.log(ordenar);

