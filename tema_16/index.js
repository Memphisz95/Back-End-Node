const parrafo = document.querySelectorAll(".parrafo")

parrafo.forEach(p => {
    p.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo " + p.innerText)
        p.classList.add("dragging")
        event.dataTransfer.setData("id", p.id)
    })
    p.addEventListener("dragend", () => {
        console.log("Ya he terminado de arrastrar")
        p.classList.remove("dragging")
    })
})

const secciones = document.querySelectorAll(".seccion")

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        console.log("Drag Over")
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Párrafo id: " + id_parrafo)
        const par = document.getElementById(id_parrafo)
        seccion.appendChild(par)
    })
})

const papelera = document.querySelectorAll("img")
console.log(papelera)
papelera.forEach(img => {
    img.addEventListener("dragover", event => {
        event.preventDefault()
        console.log("Drag Over")
    })

    img.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Párrafo id: " + id_parrafo)
        const par = document.getElementById(id_parrafo)
        par.remove()
    })
})