// $(selector).accion()
// $("h1").hide()

// Esto es una función para cargar la página
$(document).ready(() => {

    $("#hide").click(() => {
        $("li").fadeOut()
    })

    $("#show").click(() => {
        $("li").fadeIn()
    })

    $("#add").click(() => {
        $("ul").prepend("<li>New element</li>")
    })

    $("h1").click(() => {
        $("h1").css({color: "red"})
    })

    $("li").mouseenter((element) => {
        element.target.style.color = "blue"
    })

    $("li").mouseout(() => {
        $("li").css({color: "green"})
    })

})