let Total = 0;
let listaProducto=[]
let totalmaceta=0
let totalmosaico=0
let totalvela=0

function sumaProductos(vlor) {
    Total = Total + vlor;
    document.getElementById("preciototal").innerHTML = "TOTAL: " + "$" + Total; 
    document.getElementById("valorProducto").value = Total;
    
    return Total;
}

function Lista(vlor) {
    if (vlor === 300) {
        totalmaceta+=1
        document.getElementById("listaMaceta").innerHTML = "Macetas: " + totalmaceta +"X "+ "$300"; 
    }
    if (vlor === 500) {
        totalmosaico+=1
        document.getElementById("listaMosaicos").innerHTML = "Mosaico: " + totalmosaico +"X "+ "$500"; 
    }
    if (vlor === 700) {
        totalvela+=1
        document.getElementById("listaVelas").innerHTML = "Velas: " + totalvela +"X "+ "$700"; 
    } 
}

function Borrar() {
    Total = 0;
    document.getElementById("preciototal").innerHTML = "TOTAL: " + "$" + 0;
    document.getElementById("valorProducto").value = 0;
   
}

function borrarlista(){
    totalmaceta=0
    document.getElementById("listaMaceta").innerHTML = "Macetas: ";
    totalmosaico=0
    document.getElementById("listaMosaicos").innerHTML = "Mosaico: ";
    totalvela=0
    document.getElementById("listaVelas").innerHTML = "Velas: ";


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


