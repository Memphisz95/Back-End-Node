// La fecha de hoy
const fecha_hoy = new Date();
console.log(fecha_hoy);

// La fecha de tu nacimiento
const fecha_nacimiento = new Date(1995, 7, 31);
console.log(fecha_nacimiento);

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparar = (a, b) =>  a.getTime() > b.getTime();
console.log(comparar(fecha_hoy, fecha_nacimiento));

// Una variable que contenga el día de tu nacimiento
const dia = fecha_nacimiento.getDate();
console.log(dia);

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = fecha_nacimiento.getMonth() + 1;
console.log(mes);

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyo = fecha_nacimiento.getFullYear();
console.log(anyo);