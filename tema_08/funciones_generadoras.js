// Funciones generadoras
function* generaId() {
    let id = 0;
    while(true) {
        id++;
        if(id === 6) {
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
