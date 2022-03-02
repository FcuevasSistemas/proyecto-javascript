function Productos (nombreValor, stockValor, precioValor, descuentoValor){
    this.nombre = nombreValor;
    this.stock = stockValor;
    this.precio = precioValor;
    this.descuento = descuentoValor;

    this.venta = function(cantidadComprada){
        this.stock -= cantidadComprada
        console.log("El stock remanente es de: " + this.stock + " " + this.nombre);
    }
}


let contador = 0
let listadoProductosMenu = "Estos son nuestros productos: "

const productoA = new Productos("Control Noblex", 10, 1200, 0.8)
const productoB = new Productos("Control Philips", 8, 1100, 0.9)
const productoC = new Productos("Control Samsung", 6, 1350, 0.95)
const productoD = new Productos("Control LG", 4, 1500, 0.8)
const productoE = new Productos("Cable RCA común", 12, 400, 0.9)
const productoF = new Productos("Cable RCA reforzado", 10, 500, 0.9)
const productoG = new Productos("Cable 3.5 - RCA", 20, 420, 0.9)
const productoH = new Productos("Cable 3.5 - RCA reforzado", 2, 550, 0.9)

const listaProductos = [productoA, productoB, productoC, productoD,
    productoE,productoF,productoG,productoH]

const menorPrecio = listaProductos.filter(producto => producto.precio <= 600);
const menorStock = listaProductos.filter(producto => producto.stock <= 5);
console.log(menorPrecio);        
console.log(menorStock);





for(const producto of listaProductos){
    contador++
    listadoProductosMenu += "\n" + contador + "- " + producto.nombre
}

function listarProductos(){
    alert(listadoProductosMenu)
}

function menu(){
    let opcion = prompt("Menu: \n1 - Ver productos\n2 - Saludar\nESC- Salir")

    switch(opcion){
        case "1":
            listarProductos();
            comprarProductos();
            break;
        case "2":
            saludar("Bienvenido a");
            menu();
            break;
        case "ESC":
            saludar("Gracias por visitar")
            break;
    }
}

function saludar(saludo){
    alert(saludo + " la sección productos!")
}



let cantidadComprada;
let precioTotalVenta = 0;

function stockInsuficiente(stock) {
    alert("No tenemos stock suficiente de ese producto, puede comprar hasta " + stock + " unidades")
}


function calcularPrecio(precio, descuento){
    precioTotalVenta += cantidadComprada * precio * descuento;
}


function compra(stock, precio, descuento, producto) {
    cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar:"));
    if(cantidadComprada <= stock) {
        producto.venta(cantidadComprada)
        if(cantidadComprada > 3){
            calcularPrecio(precio, descuento)
        }
        else{
            calcularPrecio(precio, 1)
        }
    }
    else {
        stockInsuficiente(stock)
    }
}

function comprarProductos(){

    let cantidadProductosComprados = parseInt(prompt("Ingrese la cantidad de productos distintos que quiere comprar"))

    for (let i = 0; i < cantidadProductosComprados; i++) {

        let nombreCompra = prompt("Ingrese el nombre del producto que quiere comprar:")

        if (nombreCompra == productoA.nombre) {
            compra(productoA.stock, productoA.precio, productoA.descuento, productoA)
        }
       else if (nombreCompra == productoB.nombre) {
            compra(productoB.stock, productoB.precio, productoB.descuento, productoB)

        }
           else if (nombreCompra == productoC.nombre) {
            compra(productoC.stock, productoC.precio, productoC.descuento, productoC)
            }
          else if (nombreCompra == productoD.nombre) {
                compra(productoD.stock, productoD.precio, productoD.descuento, productoD)
            }
    
       else if (nombreCompra == productoE.nombre) {
            compra(productoE.stock, productoE.precio, productoE.descuento, productoE)
        }
   else if (nombreCompra == productoF.nombre) {
        compra(productoF.stock, productoF.precio, productoF.descuento, productoF)
    }
  else if (nombreCompra == productoG.nombre) {
        compra(productoG.stock, productoG.precio, productoG.descuento, productoG)
    }
   else if (nombreCompra == productoH.nombre) {
        compra(productoH.stock, productoH.precio, productoH.descuento, productoH)
    }
        else {
            alert('No tenemos ese producto')
        }
    }

    alert("El precio de su compra es de: $" + precioTotalVenta);
}



menu()
