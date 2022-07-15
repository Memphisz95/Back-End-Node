// Trabajando con sets
const array = [1, 2, 3, 4, 5, {id: 5}, {id: 5}];

const lista_set = new Set(array);
console.log(lista_set);

lista_set.add("hola");
console.log(lista_set);

lista_set.delete("hola");
console.log(lista_set);

console.log(lista_set.has(1));
console.log(lista_set.size);

lista_set.forEach(element => {
    console.log(element);
});

// Convertimos los sets en array
const arr_set = [...lista_set];