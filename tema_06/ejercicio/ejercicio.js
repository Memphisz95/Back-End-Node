// Ejercicio del tem
// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const lista_compra = ["pan", "leche", "limon", "fruta", "danone"];
console.log(lista_compra);

// Modifica la lista de la compra y añádele "Aceite de Girasol"
lista_compra.push("Aceite de Girasol");
console.log(lista_compra);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista_compra.pop();
console.log(lista_compra);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const lista_peliculas_fav = [
    {titulo: "El caballero oscuro", director: "Cristopher Nolan", fecha: new Date("2008-06-01")},
    {titulo: "Origen", director: "Cristopher Nolan", fecha: new Date("2010-01-30")},
    {titulo: "Soy legenda", director: "Francis Lawrence", fecha: new Date("2006-11-23")}
];

//  Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculas_2010 = lista_peliculas_fav.filter(valor => valor.fecha.getFullYear() >= 2010);
console.log(peliculas_2010);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = lista_peliculas_fav.map((valor, indice) => (indice + 1) + " - " + valor.director);
console.log(directores);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const peliculas = lista_peliculas_fav.map((valor, indice) => (indice + 1) + " - " + valor.titulo);
console.log(peliculas);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directores_peliculas = directores.concat(peliculas);
console.log(directores_peliculas);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const peliculas_directores = [...peliculas, ...directores];
console.log(peliculas_directores);