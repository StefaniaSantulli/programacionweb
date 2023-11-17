let Total = 0;
let listaProducto=[]

function sumaProductos(vlor) {
    Total = Total + vlor;
    document.getElementById("preciototal").innerHTML = "TOTAL: " + "$" + Total; 
    document.getElementById("valorProducto").value = Total;
    
    return Total;
}

function Lista(vlor) {
    if (vlor === 300) {
        listaProducto.push("Maceta $300");
        document.getElementById("listaProductos").innerHTML = "Productos Seleccionados: " + listaProducto.join(', '); 
    }
    if (vlor === 500) {
        listaProducto.push("Mosaico $500");
        document.getElementById("listaProductos").innerHTML = "Productos Seleccionados: " + listaProducto.join(', '); 
    }
    if (vlor === 700) {
        listaProducto.push("Vela $700");
        document.getElementById("listaProductos").innerHTML = "Productos Seleccionados: " + listaProducto.join(', '); 
    } 
}

function Borrar() {
    Total = 0;
    document.getElementById("preciototal").innerHTML = "TOTAL: " + "$" + 0;
    document.getElementById("valorProducto").value = 0;
   
}

function borrarlista(){
    listaProducto=[]
    document.getElementById("listaProductos").innerHTML = "Productos Seleccionados:";
    document.getElementById("listaProductos").value = [];
    document.getElementById("listaProductos").innerHTML = "Productos Seleccionados: ";
}


document.getElementById("botonA").addEventListener("click", function() {
    sumaProductos(300);
});
document.getElementById("botonA").addEventListener("click", function() {
    Lista(300);
});
document.getElementById("botonB").addEventListener("click", function() {
    sumaProductos(500);
});
document.getElementById("botonB").addEventListener("click", function() {
    Lista(500);
});
document.getElementById("botonC").addEventListener("click", function() {
    sumaProductos(700);
});
document.getElementById("botonC").addEventListener("click", function() {
    Lista(700);
});

document.getElementById("borrar").addEventListener("click", Borrar);
document.getElementById("borrar").addEventListener("click", borrarlista);


