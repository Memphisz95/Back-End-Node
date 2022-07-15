// Vamos a trabajar con strings
let cadena = "Hola mundo";
let cadena_2 = 'Hola con comillas simples.';

console.log(cadena);
console.log(cadena_2);

let frase = "Hola, \"esto es un entrecomillado\"";
console.log(frase);

let frase_2 = 'Hola, "esto es otro entrecomillado"';
console.log(frase_2);

// Comillas invertidas (backticks)
let nombre = "Adrian";
let str_backticks = `Esto es un string con backticks. Hola, ${nombre}`;
console.log(str_backticks);

let plantilla = `
<html>
<body>
<h1>Hola desde la plantilla de javascript</h1>
<h2>Página web de ${nombre}</h2>
</body>
</html>
`;
console.log(plantilla);