const f = document.getElementById("form")
console.log(f)

const nombre = document.getElementById("nombre")
console.log(nombre)

f.addEventListener("submit", evento => {
    console.log(evento)
    evento.preventDefault()

    if(nombre.value.trim() === "") {
        alert("Nombre vacio")
    } else if(!isNaN(nombre.value)){
        alert("No se admiten numeros")
    } else {
        alert("Formulario enviado")
    }
})