// Crea una variable con tu nombre
const nombre = "Adrian"

// Crea una variable con tu apellido
const apellido = "Sanchez"

const persona = {
    nombre,
    apellido
}

// Almacena el objeto anterior en la SessionStorage
// sessionStorage.setItem("Objeto", JSON.stringify(persona))

// Almacena el objeto anterior en la LocalStorage
// localStorage.setItem("Objeto", JSON.stringify(persona))

// Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
// document.cookie = "objetoCookie=" + persona + "; expires = " + 
new Date(2022, 6, 14, 11, 6)