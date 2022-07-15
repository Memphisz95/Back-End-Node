const h1 = document.getElementById("encabezado")
console.log(h1)

h1.addEventListener("cambioTexto", evento => {
    console.log(evento.detail)
    h1.innerHTML = evento.detail.texto
    h1.style.color = evento.detail.color
})

function cambiartexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    h1.dispatchEvent(evento)
}