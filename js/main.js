let nombreProductoA = 'Control Noblex';
let stockProductoA = 4;
let precioProductoA = 1400;

let nombreProductoB = 'Control Philips';
let stockProductoB = 3;
let precioProductoB = 1300;

let nombreProductoC = 'Control Samsung';
let stockProductoC = 2;
let precioProductoC = 1200;

let nombreProductoD = 'Control LG';
let stockProductoD = 1;
let precioProductoD = 1500;


function menu(){
    let opcion = prompt("Menu: \n1 - Ver productos \nesc - Salir")

    switch(opcion){
        case "1":
            listarProductos();
            comprarProductos();
            break;
            
            case "esc":
            saludar("Bienvenido ");
            break; 
    }
}

function saludar (saludo){
    alert(saludo + "a la sección de productos!");
}

function listarProductos(){
    alert("Estos son nuestros productos: \n1- " + nombreProductoA + "\n2- " + nombreProductoB + "\n3-" + nombreProductoC + "\n4-" + nombreProductoD)
}

let cantidadComprada;
let precioTotalVenta = 0;

function stockInsuficiente(stock) {
    alert("No tenemos stock suficiente de ese producto, puede comprar hasta " + stock + " unidades")
}

function stockSuficiente(stock, nombre) {
    stock -= cantidadComprada;
    console.log("El stock remanente es de: " + stock + nombre);
}

function calcularPrecio(precio, descuento){
    precioTotalVenta += cantidadComprada * precio;
}


function compra(stock, precio, nombre) {
    cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar:"));
    if(cantidadComprada <= stock) {
    stockSuficiente(stock, nombre);
        if(cantidadComprada > 3){
            calcularPrecio(precio)
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

        if (nombreCompra == nombreProductoA) {
            compra(stockProductoA, precioProductoA, nombreProductoA)
        }
        else if (nombreCompra == nombreProductoB) {
            compra(stockProductoB, precioProductoB, nombreProductoB)
        }
        else if (nombreCompra == nombreProductoC) {
            compra(stockProductoC, precioProductoC, nombreProductoC)
        }
        
            else if (nombreCompra == nombreProductoD) {
                compra(stockProductoD, precioProductoD, nombreProductoD)
            }

            else {
            alert('No tenemos ese producto')
        }
    }

    alert("El precio de su compra es de: $" + precioTotalVenta);
}



menu()