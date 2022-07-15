// Iterar con listas .find()
// Lista de objetos para utilizar el método .find()
const lista_obj = [
    {nombre: "Adrian", edad: 26},
    {nombre: "Miguel", edad: 56},
    {nombre: "Ana", edad: 54},
    {nombre: "Joana Aina", edad: 5}
];

const objeto = lista_obj.find(o => o.nombre === "Miguel");
console.log(objeto.edad);

const { edad } = lista_obj.find(o => o.nombre === "Adrian");
console.log(edad);