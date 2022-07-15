// Métodos avanzados .map(), .filter(), .reduce()
const array = ["Madrid", "Barcelona", "Palma de Mallorca", "Bilbao"];

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newArray);

const arrayObj = [
    {nombre: "Adrian", edad: 26},
    {nombre: "Roberto", edad: 34},
    {nombre: "Ana", edad: 67},
    {nombre: "Miguel", edad: 3}
];

// const personasMayores = arrayObj.filter(obj => {
//    if(obj.edad > 30) {
//        return true;
//    } else {
//        return false;
//    }
// });

// console.log(personasMayores);

console.log(arrayObj.filter(obj => obj.edad > 30));

const array_2 = arrayObj.filter(obj => obj.nombre !== "Ana");
console.log(array_2);

const n = [1, 2, 3, 4];
const suma = n.reduce((acumulado, current) => {
    console.log(acumulado);
    console.log(current);
    return acumulado + current;
});
console.log(suma);