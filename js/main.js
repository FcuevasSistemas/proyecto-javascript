function Productos (nombreValor, stockValor, precioValor, descuentoValor, categoriaValor, imgValor){
    this.nombre = nombreValor;
    this.stock = stockValor;
    this.precio = precioValor;
    this.descuento = descuentoValor;
    this.categoria = categoriaValor;
    this.img = imgValor;
    
    this.venta = function(cantidadComprada){
        this.stock -= cantidadComprada
        console.log("El stock remanente es de: " + this.stock + " " + this.nombre);
    }
}


let contador = 0
let listadoProductosMenu = "Estos son nuestros productos: "

const productoA = new Productos("Control Noblex", 10, 1200, 0.8, "control", "../imagenes/control-noblex.jpg")
const productoB = new Productos("Control Philips", 8, 1100, 0.9, "control", "../imagenes/control-philips.jpg")
//const productoC = new Productos("Control Samsung", 6, 1350, 0.95, "control", "")
//const productoD = new Productos("Control LG", 4, 1500, 0.8, "control", "")
const productoE = new Productos("Cable RCA común", 12, 400, 0.9, "cable", "../imagenes/cable-rca-comun.jpg")
const productoF = new Productos("Cable RCA reforzado", 10, 500, 0.9, "cable", "../imagenes/cable-rca-premium.jpg")
//const productoG = new Productos("Cable 3.5 - RCA", 20, 420, 0.9, "cable", "")
//const productoH = new Productos("Cable 3.5 - RCA reforzado", 2, 550, 0.9, "cable", "")

const listaProductos = [productoA, productoE, productoB, productoF]

//let categoriaProducto = console.log("ingrese la categoria de producto...")

//const listaSegunCategoria = listaProductos.filter(x => x.categoria == categoriaProducto);

let catalogo = document.createElement("div")


let control = document.querySelector(".categoria1")
let cable = document.querySelector(".categoria2")

control.addEventListener("click", renderControl)
cable.addEventListener("click", renderCable)

/*for (const producto of listaProductos) {
    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<div class="card-producto">
                            <img src=${producto.img} class="imagen"/>
                            <p>Producto: ${producto.nombre}</p>
                            <b>$ ${producto.precio}</b></div>`
                    
                catalogo.appendChild(contenedor);        
}*/

function renderControl(){

    const listaSegunCategoria = listaProductos.filter(x => x.categoria == "control");

    let catalogo = document.querySelector(".catalogo")

    for (const producto of listaSegunCategoria) {
        let contenedor = document.createElement("div");
    
        contenedor.innerHTML = `<div class="card-producto">
                                <img src=${producto.img} class="imagen"/>
                                <p>Producto: ${producto.nombre}</p>
                                <b>$ ${producto.precio}</b></div>`
                        catalogo.appendChild(contenedor);        
    }
}

function renderCable(){
    const listaSegunCategoria = listaProductos.filter(x => x.categoria == "cable");

    let catalogo = document.querySelector(".catalogo")

    for (const producto of listaSegunCategoria) {
        let contenedor = document.createElement("div");
    
        contenedor.innerHTML = `<div class="card-producto">
                                <img src=${producto.img} class="imagen"/>
                                <p>Producto: ${producto.nombre}</p>
                                <b>$ ${producto.precio}</b></div>`
                        catalogo.appendChild(contenedor);        
    }
}





    /*const menorPrecio = listaProductos.filter(producto => producto.precio <= 600);
const menorStock = listaProductos.filter(producto => producto.stock <= 5);
console.log(menorPrecio);        
console.log(menorStock);*/





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

/*function comprarProductos(){

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
*/
