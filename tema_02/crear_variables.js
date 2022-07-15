// como asignar variables en javascript
// var, let o const
// var y let pueden cambiar su valor
var a = 5;
console.log(a);
a = 20;
console.log(a);

let b = 10;
console.log(b);
b = 30;
console.log(b);

// const no puede variar su valor o reasignar un valor a la constante
const c = 100;
console.log(c);
// c = 20; ==> no puede variar al ser una constante

let variable = "Primera variable";
for(var i = 0; i < 5; i++) {
    let variable = "Segunda variable";
}
console.log(variable);

// typeof muestra el tipo de valor de la variable
console.log(typeof b);