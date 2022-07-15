// Factorial de 10 utilizando un bucle while, una bifurcacion if y una sentencia break

let resultado = 1;
let i = 1;

while(i <= 20) {
    if(i === 11) {
        break;
    }
    resultado *= i;
    console.log(resultado);
    i++;
}