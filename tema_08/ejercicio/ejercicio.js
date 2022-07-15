// Una función sin parámetros que devuelva siempre "true"
function sinParametros() {
    return true;
}

console.log(sinParametros());

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function Asincrona() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Hola soy una promesa");
        }, 5000);
    });
}

Asincrona();

// Una función generadora de índices pares automáticos
function* generaId() {
    let id = 0;
    while(true) {
        id += 2;
        if(id === 20) {
            return id;
        }
        yield id;
    }
}

const gen = generaId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);