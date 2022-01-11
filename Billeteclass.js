class Billetes {
    constructor(valor, cantidad) {

        this.valor = valor,
        this.cantidad = cantidad
       
    }
}

function entregarDinero() {
    
    let dineroExtraer = document.getElementById("dinero")
    dinero = parseInt(dineroExtraer.value)

    entregado = []
    
    for (let billete of caja) {

        if (dinero > 0) {

            div = Math.floor(dinero / billete.valor)

            if (div > billete.cantidad) {
                papeles = billete.cantidad
            }
            else {
                papeles = div
            }
 
            entregado.push(new Billetes(billete.valor, papeles))
            dinero = dinero - (billete.valor * papeles)
        }
        
    }

   if(dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
  }
  else
  {
    for(let e of entregado)
    {
      if(e.cantidad > 0)
      {
              resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }


}

function mostrarCaja() {

    sacarDineroCaja()

    din = 0
    for (let b of caja) {
        din += b.valor * b.cantidad
    }
    
    
    cantidadDinero.innerHTML = "el dinero disponible en este cajero es " + din
}

function sacarDineroCaja() {
    let resultado = 0

    for (let b of entregado) {
        resultado += b.valor * b.cantidad
    }

    din = din - resultado
    cantidadDinero.innerHTML = "el dinero disponible en este cajero es " + din


}

function agregarDinero(number) {
    
    for (let b of caja) {
        if (number == b.valor) {
            b.cantidad = b.cantidad + 1
        }
    }
    mostrarCaja()

}
