// bucles while, do-while
// los bucles while hay que tener mucho cuidado
// ya que si el valor de a siempre es el mismo creará un bucle infinito

let a = 10;
while(a > 0) {
    console.log(a);
    a--;
}

let b = 20;
let c = '';
do {
    b -= 1;
    c -= 1;
    console.log(b);
} while(b > 10);