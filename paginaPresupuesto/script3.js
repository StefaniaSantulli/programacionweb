console.log("holaa")

/* let Total = 0
function sumaProductos(Valoritem) {
    Total = Total + Valoritem
    document.getElementById("preciototal").innerHTML = "TOTAL: " + "$" + Total; 
    document.getElementById("valorProducto").value = Total
    return Total}

function Limpiar() {
    Total=0
    document.getElementById("elTotal").innerHTML = "TOTAL: " + "$" + 0; }
 */

let Total = 0;

function sumaProductos(Valoritem) {
    Total = Total + Valoritem;
    document.getElementById("preciototal").innerHTML = "TOTAL: " + "$" + Total; 
    document.getElementById("valorProducto").value = Total;
    return Total;
}

function Limpiar() {
    Total = 0;
    document.getElementById("preciototal").innerHTML = "TOTAL: " + "$" + 0;
    document.getElementById("valorProducto").value = 0;
}

// Asocia la función sumaProductos al hacer clic en un botón
document.getElementById("botonA").addEventListener("click", function() {
    sumaProductos(300);
});
document.getElementById("botonB").addEventListener("click", function() {
    sumaProductos(500);
});
document.getElementById("botonC").addEventListener("click", function() {
    sumaProductos(700);
});
// Asocia la función Limpiar al hacer clic en otro botón (de limpieza)
document.getElementById("borrar").addEventListener("click", Limpiar);
