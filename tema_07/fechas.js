// Trabajando con fechas
// Fecha de ahora
const fecha = new Date();
console.log(fecha);

const fecha_2 = new Date(1995, 7, 31, 03, 00, 15);
console.log(fecha_2);

// Fecha en milisegundos
const fecha_3 = new Date(10000000000000);
console.log(fecha_3);

const fecha_4 = new Date("August 31 1995");
console.log(fecha_4);

const siglo = new Date("August 31 1995");
if(siglo > new Date("december 31 1999")) {
    console.log("Estamos en el siglo XXI");
} else if(siglo > new Date("december 31 1899") && siglo < new Date("january 01 2000")){
    console.log("Estamos en el siglo XX");
} else {
    console.log("Es otro siglo");
}

const siglo_2 = new Date("August 31 1995");
console.log(siglo === siglo_2);
console.log(siglo.getTime() === siglo_2.getTime());