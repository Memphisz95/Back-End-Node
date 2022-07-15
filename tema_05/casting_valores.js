// valueOf()
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b); // Casting

console.log(b.valueOf());

// NaN (not a number) - Infinity
let n = Number("Adrian");
console.log(n);
console.log(isNaN(n));

// Números hexadecimales (base 16) - dos bytes por número
let numHex = '0x3a5b7';
console.log(parseInt(numHex));

// Cómo convertir los strings a valores númericos
let numero = '5.57';
console.log(typeof numero);
let convertir = Number(numero);
console.log(typeof convertir);

// Obtener valores máximos y mínimos en Javascript
let max = Number.MAX_VALUE;
let min = Number.MIN_VALUE;
let precision = Number.EPSILON;

console.log(min);
console.log(max);
console.log(precision);