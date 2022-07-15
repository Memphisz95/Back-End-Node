window.onload = () => {
    const boton = document.getElementById("saludo")
    // console.log(boton)
    boton.addEventListener("click", () => {
        alert("Hola")
        confirm("¿Estas de acuerdo?") 
        ? console.log("SI") 
        : console.log("NO")
    })

    const lista = [
        {
            nombre: "Adrian",
            edad: 26
        },
        {
            nombre: "Angels",
            edad: 23
        },
        {
            nombre: "Miguel",
            edad: 58
        }
    ]

    console.table(lista)
}