//  .some() = que .every()
const array = [2, 3, 5, -6, 6, 8, 10, 14, 15, 17];

const res = array.some(valor => valor < -10);
console.log(res);

const existe = array.some(valor => valor === 10);
console.log(existe);

const str = "Hola mundo";
const arrayStr = Array.from(str);
console.log(arrayStr);

const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);