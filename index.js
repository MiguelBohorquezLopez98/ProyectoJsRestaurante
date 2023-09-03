const usuario = {
    nombre: "Miguel",
    edad: 30,
    deuda: 0
}

let pedido = []
let costoPedido = 0
let totalVendido = 0

const mostrarMenu = () => {
    console.log(`CODIGO - NOMBRE PRODUCTO - COSTO`)
    //productos.forEach(producto => console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`))

    for(let producto of productos){
        console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`)
    }
}

const pedirProducto = cod => {
    if (!cod) return "Ingrese un codigo valido"

    const productoEncontrado = productos.find(producto => producto.codigo === cod.toUpperCase())
    if (!productoEncontrado) return "El producto no existe"
    
    pedido.push(productoEncontrado)
    console.log("El producto ha sido agregado a sus pedido. Su pedido es: ")
    return pedido
}

const verPedido = () => pedido

const calcularCosto = () => {
    let costo = 0
    for (producto of pedido){
        costo += producto.costo
    }
    costoPedido = costo
    return costoPedido
}

const finalizarPedido = () => {
    calcularCosto()
    usuario.deuda = costoPedido

    pedido = []
    totalVendido += costoPedido
    costoPedido = 0

    return `${usuario.nombre}, debes pagar ${usuario.deuda} dolares.`
}

const pagarPedido = montoEntregado => {
    if (typeof montoEntregado === "number"){
        if (montoEntregado < usuario.deuda){
            return `No te alcanza para pagar tu pedido.`
        } else if (montoEntregado === usuario.deuda){
            usuario.deuda = 0
            return `Tu pedido ha sido pagado.`
        } else {
            usuario.deuda = 0
            return `Tu pedido ha sido pagado y tu cambio es de ${montoEntregado - usuario.deuda}.`
        }
    } else {
        return "Dato incorrecto"
    }
}

const ventaTotal = () => totalVendido