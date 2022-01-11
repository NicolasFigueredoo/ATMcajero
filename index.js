
let caja = [
    new Billetes(1000, 4),
    new Billetes(100, 4),
    new Billetes(50, 4),
    new Billetes(20, 4),
    new Billetes(10, 4),

]
let entregado = []

let din = 0
let div = 0
let dinero = 0
let papeles = 0;

let botonExtraer = document.getElementById("extraer")
let dineroExtraer = document.getElementById("dinero")
let resultado = document.getElementById("resultado")
let cantidadDinero = document.getElementById("cantidaddinero")

let agregarMil = document.getElementById("mil")
let agregarCien = document.getElementById("cien")
let agregarCincuenta = document.getElementById("cincuenta")
let agregarVeinte = document.getElementById("veinte")
let agregarDiez = document.getElementById("diez")

agregarMil.addEventListener("click", () => {
    agregarDinero(1000)
})

agregarCien.addEventListener("click", () => {
    agregarDinero(100)
})

agregarCincuenta.addEventListener("click", () => {
    agregarDinero(50)
})

agregarVeinte.addEventListener("click", () => {
    agregarDinero(20)
})

agregarDiez.addEventListener("click", () => {
    agregarDinero(10)
})

botonExtraer.addEventListener("click", entregarDinero)
botonExtraer.addEventListener("click", sacarDineroCaja)


mostrarCaja()
