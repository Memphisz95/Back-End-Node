// Iterar valores de una lista
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach(element => {
    if(element % 2 == 0){
        // Muestra los pares
        console.log(element);
    }
    // Muestra todos los elementos
    console.log(element);
});

// Otra manera de iterar lista. Es la opción tradicional
for(let i = 0; i < array.length; i++) {
    // Muestra los impares
    if(array[i] % 2 != 0) {
        console.log(array[i]);
    }
    // Muestra todos los elementos de la lista
    console.log(array[i]);
} 