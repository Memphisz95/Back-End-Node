// Declarar una lista o array
let lista = ["Adrian", "Manolo", "Roberto", "Carlos"];
console.log(lista);

// Para recorrer una lista y mostrar sus elementos
lista.forEach(element => {
    console.log(element);
});

// De igual forma que el foreach utilizamos el bucle for
for(let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

lista.push("Maria");
console.log(lista);

lista.unshift("Alejandro");
console.log(lista);

lista.pop();
console.log(lista); 

// Desde el primer parmetro que es el índice de la posición en la lista, segundo parámetro borra tantos elementos desde el primer parámetro
lista.splice(1, 2);
console.log(lista);

// Un tercer parámetro añade a la lista mediante el primer parámetro
lista.splice(1, 0, "hola");
console.log(lista);