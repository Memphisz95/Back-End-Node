// Los métodos más utilizados de strings
let a = "hola";

console.log(a.length);
console.log(a.slice(1, 3));

let saludo = "Hola, Adrian";
console.log(saludo);
// .replace sólo cambia la primera instancia
console.log(saludo.replace("Hola", "Buenas"));

// /g esglobal e sustituye todos los valores del replace
let texto = "Hola. Mi nombre es Adrian. Tengo 26 años. Vivo en Puerto Alcudia. Este es un pueblo bonito. es es un un.";
console.log(texto.replace("es", "aaaaaa"));
console.log(texto.replace(/a/g, "o"));