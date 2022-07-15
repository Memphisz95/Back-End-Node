// localStorage
// localStorage.setItem("nombre", "Adrian")
// localStorage.setItem("nombre", "Miguel")

console.log(localStorage.getItem("nombre"))

// localStorage.setItem("persona", JSON.stringify({"nombre": "Adrian", "edad": 26}))
console.log(JSON.parse(localStorage.getItem("persona")))

localStorage.removeItem("nombre")

// sessionStorage.setItem("nombre-sesion","Adrian")

document.cookie = "nombreCoockie=Adrian"
document.cookie = "nombreCaducidad=Nombre;expires=" + 
new Date(2023, 0 ,1).toUTCString()
console.log(document.cookie)