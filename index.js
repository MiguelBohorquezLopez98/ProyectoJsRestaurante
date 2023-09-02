const usuario = {
    nombre: "Miguel",
    edad: 30,
    deuda: 0
}

const pedido = []
let costoPedido = 0


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
