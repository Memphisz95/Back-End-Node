// controlar los bucles con break o continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for(let i = 0; i < lista.length; i++) {

    console.log(lista[i]);

    if(lista[i] === 6) {
        continue;
    }

    console.log(lista[i]);

    if(lista[i] > 3) {
        break;
    }

    console.log(lista[i]);
}