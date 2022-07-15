// Bucles

for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("El bucle es false y sale");

let lista = [1, 2, 3, 4, 5, 6];
for(let i = 0; i < lista.length; i++) {
    if(i % 2 == 0){
        console.log(lista[i]);
    }
}

// otra manera de utilizar for of
// veriamos los elementos directamente sin poner lista[i] ==> para ver la lista + [posicion]
for(let i of lista) {
    console.log(i);
}

// foreach
lista.forEach(element => {
    console.log(element);
});

// for in
let objeto = {
    nombre: "Adrian",
    edad: 26
}

for(let propiedad in objeto) {
    console.log(propiedad); // imprime las propiedad
    console.log(objeto[propiedad]); // imprime el valor de las propiedades
}

console.log(objeto.nombre);
let edad = "edad";
console.log(objeto[edad]);