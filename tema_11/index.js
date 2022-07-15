// POO (programación orientada a objetos)
const persona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // = nombre: nombre
        edad,
        isDeveloper,
        saludo: function() {
            console.log("Hola")
        }
    }
}

const nueva_persona = persona("Adrian", 26, true)
console.log(nueva_persona)
const nueva_persona2 = persona("Ana", 54, false)
console.log(nueva_persona2)