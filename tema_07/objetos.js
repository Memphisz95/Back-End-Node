// Objetos en Javascript
const coche = {
    marca: "Ferrari",
    modelo: "f25",
    cv: 500,
    motor: "gasolina",
    color: "rojo"
};

// Podemos acceder a sus valores
console.log(coche.marca);
console.log(coche.modelo);

const motor = "motor";
console.log(coche[motor]);

// Al cambiar el valor en coche_", se cambia en coche también, ya que apunta a la misma referencia en memoria
const coche_2 = coche;
coche_2.marca = "Hyundai";
console.log(coche);

const coche_3 = {...coche};
coche_3.marca = "Ferrari";
console.log(coche);
console.log(coche_3);

const lista_coches = [
    {coche: "Ferrari", posicion: 2},
    {coche: "Mercedes", posicion: 3},
    {coche: "Red Bull", posicion: 1},
    {coche: "Alpine", posicion: 4},
];

console.log(lista_coches);

// Ordenar lista de menor a mayor
lista_coches.sort((a, b) => a.posicion - b.posicion);
console.log(lista_coches)