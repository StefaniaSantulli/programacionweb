let imgjava = document.getElementsByClassName("imgjava")
console.log(imgjava)

function cambiarfondo(){
    
this.style.filter = "blur(10px)"
}
function cambiarfondo2(){
    this.style.filter = "blur(0px)"

    }

function ponerId(indice){
    codigo='00'
    codigoFinal=codigo+indice
    console.log('Identificador: ' + codigoFinal);
}

for(let i=0;i<=imgjava.length-1;i++){
    imgjava[i].addEventListener("mouseover",cambiarfondo,)
    imgjava[i].addEventListener("mouseover",ponerId)
    imgjava[i].addEventListener("mouseleave",cambiarfondo2) 
}