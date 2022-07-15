// Comparación entre listas
// .every() si los componentes de esta lista cumple una condición
const array = [1, 2, 5, 3, 23, 65, 100, -2, 98];
const resultado = array.every(valor => {
    if(valor > 0) {
        return true;
    } else {
        return false;
    }
});
console.log(resultado);

const r = array.every(valor => valor > 0);
console.log(r);

// Comparamos listas
const lista_1 = [1, 2, 3];
const lista_2 = [1, 2, 3];

console.log(lista_1 === lista_2);

const compararArrays = (array1, array2) => {
    if(array1.length !== array2.length) return false;
    const res = array1.every((valor, i) => valor === array2[i]);
    return res;
}

console.log(compararArrays(lista_1, lista_2));