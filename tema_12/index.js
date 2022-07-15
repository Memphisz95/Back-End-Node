// Una función que admita un parámetro "num", y devuelva una lista 
// con esa cantidad de números de la secuencia de Fibonacci 
// (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
// Ejecuta la depuración de VSCode para visualizar la ejecución de la función

function Fibonacci(num) {
    let lista = [1, 1];
    let n;
    for(let i = 2; i < num; i++) {
        n = lista[i - 1] + lista[i - 2];
        lista = [...lista, n];
    }
    return lista;
}

const fibo = Fibonacci(6);
console.log(fibo);