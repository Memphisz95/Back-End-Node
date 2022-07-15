// Funciones asíncronas
function miAsinc() {
    // Hace una llamada a una base de datos externa
    // Puede darnos algún error
}

// Promesas
const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random(0, 2) * 2)
    if(i !== 0) {
        console.log(i);
        resolve();
    } else {
        console.log(i);
        reject();
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))