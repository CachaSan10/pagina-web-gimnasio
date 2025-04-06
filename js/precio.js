const precioBasico = document.getElementById("precio-basico");
const precioEstandard = document.getElementById("precio-estandard");
const precioPremium = document.getElementById("precio-premium");

const mensual = document.getElementById("mensual")
const anual = document.getElementById("anual")


function cambiarPrecioMensual() {
    precioBasico.innerText = "$19/mes"
    precioEstandard.innerText = "$49/mes"
    precioPremium.innerText = "$99/mes"
    mensual.style.background ="rgb(101, 255, 101)"
    anual.style.background = "#f0f0f0"
}

function cambiarPrecioAnual() {
    precioBasico.innerText = "$199/año"
    precioEstandard.innerText = "$499/año"
    precioPremium.innerText = "$999/año"
    mensual.style.background ="#f0f0f0"
    anual.style.background = "rgb(101, 255, 101)"
}